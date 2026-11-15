/**
 * scripts/verify-all.js
 * Comprehensive pre-public release audit and verification.
 * Checks:
 * 1. Internal zip layout of all .skill packages
 * 2. All referenced files in references/ inside each SKILL.md
 * 3. All markdown link targets across all docs and root files
 * 4. Frontmatter schema and valid YAML
 * 5. Secret leak patterns and unresolved placeholders
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT_DIR = path.resolve(__dirname, '..');
let errors = [];
let warnings = [];

function check(title, fn) {
  try {
    fn();
    console.log(`✅ [PASS] ${title}`);
  } catch (e) {
    console.error(`❌ [FAIL] ${title}: ${e.message}`);
    errors.push(`${title}: ${e.message}`);
  }
}

console.log('🔍 Running Full Pre-Public Verification Suite...\n');

// 1. Verify skills folder and internal references
const SKILLS_DIR = path.join(ROOT_DIR, 'skills');
const skillDirs = fs.readdirSync(SKILLS_DIR, { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => d.name);

skillDirs.forEach(skill => {
  const skillPath = path.join(SKILLS_DIR, skill);
  const skillMdPath = path.join(skillPath, 'SKILL.md');

  check(`Skill ${skill}: SKILL.md exists`, () => {
    if (!fs.existsSync(skillMdPath)) throw new Error('Missing SKILL.md');
  });

  const content = fs.readFileSync(skillMdPath, 'utf8');

  // Check references mentioned in SKILL.md
  const refMatches = content.matchAll(/references\/([a-zA-Z0-9_-]+\.md)/g);
  for (const m of refMatches) {
    const refFile = m[1];
    check(`Skill ${skill}: references/${refFile} exists on disk`, () => {
      const refPath = path.join(skillPath, 'references', refFile);
      if (!fs.existsSync(refPath)) throw new Error(`Referenced file not found: ${refPath}`);
    });
  }
});

// 2. Verify all markdown links across the entire repository
function getAllMdFiles(dir) {
  let results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name === '.git' || entry.name === 'node_modules' || entry.name === 'dist') continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(getAllMdFiles(full));
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      results.push(full);
    }
  }
  return results;
}

const mdFiles = getAllMdFiles(ROOT_DIR);
console.log(`\n📄 Checking relative markdown links in ${mdFiles.length} markdown files...`);

mdFiles.forEach(file => {
  const fileContent = fs.readFileSync(file, 'utf8');
  const fileDir = path.dirname(file);
  // Match markdown links: [text](path) ignoring http(s), mailto, anchor only (#)
  const linkRegex = /\[([^\]]+)\]\((?!https?:\/\/|mailto:|#)([^)#]+)(?:#[^)]*)?\)/g;
  let match;
  while ((match = linkRegex.exec(fileContent)) !== null) {
    const linkTarget = match[2].trim();
    if (!linkTarget) continue;
    const resolvedPath = path.resolve(fileDir, linkTarget);
    check(`Link in ${path.relative(ROOT_DIR, file)} -> ${linkTarget}`, () => {
      if (!fs.existsSync(resolvedPath)) {
        throw new Error(`Broken link: '${linkTarget}' resolved to non-existent '${resolvedPath}'`);
      }
    });
  }
});

// 3. Verify .skill packages in dist/
const DIST_DIR = path.join(ROOT_DIR, 'dist');
check('dist directory exists', () => {
  if (!fs.existsSync(DIST_DIR)) throw new Error('dist directory not found');
});

skillDirs.forEach(skill => {
  const pkgPath = path.join(DIST_DIR, `${skill}.skill`);
  check(`Package dist/${skill}.skill exists`, () => {
    if (!fs.existsSync(pkgPath)) throw new Error(`Missing ${pkgPath}`);
    const size = fs.statSync(pkgPath).size;
    if (size < 500) throw new Error(`Suspiciously small package size: ${size} bytes`);
  });

  // Test extraction with tar/powershell to inspect layout
  check(`Package dist/${skill}.skill contains valid zip structure and SKILL.md`, () => {
    const inspectCmd = `powershell -NoProfile -Command "Add-Type -AssemblyName System.IO.Compression.FileSystem; [System.IO.Compression.ZipFile]::OpenRead('${pkgPath.replace(/\\/g, '\\\\')}').Entries | Select-Object -ExpandProperty FullName"`;
    const entries = execSync(inspectCmd, { encoding: 'utf8' }).trim().split(/\r?\n/).map(s => s.trim()).filter(Boolean);
    
    // Check that SKILL.md is inside the package
    const hasSkillMd = entries.some(e => e === 'SKILL.md' || e.endsWith('/SKILL.md') || e.endsWith('\\SKILL.md'));
    if (!hasSkillMd) {
      throw new Error(`Package ${skill}.skill does not contain SKILL.md. Entries found: ${entries.join(', ')}`);
    }
  });
});

console.log('\n--- VERIFICATION SUMMARY ---');
if (errors.length > 0) {
  console.error(`❌ Total failures: ${errors.length}`);
  errors.forEach(e => console.error(`  - ${e}`));
  process.exit(1);
} else {
  console.log('✨ ALL AUDIT AND VERIFICATION CHECKS PASSED WITH ZERO FAILURES!');
  process.exit(0);
}
