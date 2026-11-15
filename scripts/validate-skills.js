#!/usr/bin/env node
/**
 * scripts/validate-skills.js
 * Validates skill structure, frontmatter, line limits, and secret safety.
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const SKILLS_DIR = path.join(ROOT_DIR, 'skills');

let hasErrors = false;

function error(msg) {
  console.error(`❌ [ERROR] ${msg}`);
  hasErrors = true;
}

function success(msg) {
  console.log(`✅ [PASS] ${msg}`);
}

function info(msg) {
  console.log(`ℹ️ [INFO] ${msg}`);
}

// 1. Validate skills folder
if (!fs.existsSync(SKILLS_DIR)) {
  error(`Skills directory does not exist: ${SKILLS_DIR}`);
  process.exit(1);
}

const skillFolders = fs.readdirSync(SKILLS_DIR, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

info(`Found ${skillFolders.length} skill(s): ${skillFolders.join(', ')}`);

skillFolders.forEach(folder => {
  const folderPath = path.join(SKILLS_DIR, folder);
  const skillMdPath = path.join(folderPath, 'SKILL.md');

  // Check SKILL.md exists
  if (!fs.existsSync(skillMdPath)) {
    error(`Missing SKILL.md in skills/${folder}`);
    return;
  }

  const content = fs.readFileSync(skillMdPath, 'utf8');
  const lines = content.split('\n');

  // Check line count (< 250 lines)
  if (lines.length >= 250) {
    error(`skills/${folder}/SKILL.md exceeds 250 lines (currently ${lines.length} lines)`);
  } else {
    success(`skills/${folder}/SKILL.md line count: ${lines.length}/250`);
  }

  // Check frontmatter
  if (!content.startsWith('---')) {
    error(`skills/${folder}/SKILL.md missing opening '---' frontmatter`);
    return;
  }

  const endFrontmatter = content.indexOf('\n---', 3);
  if (endFrontmatter === -1) {
    error(`skills/${folder}/SKILL.md missing closing '---' frontmatter`);
    return;
  }

  const frontmatterText = content.substring(3, endFrontmatter).trim();
  const frontmatterLines = frontmatterText.split('\n');

  let nameVal = null;
  let hasDescription = false;

  for (const line of frontmatterLines) {
    const trimmed = line.trim();
    if (trimmed.startsWith('name:')) {
      nameVal = trimmed.replace('name:', '').trim().replace(/^['"]|['"]$/g, '');
    }
    if (trimmed.startsWith('description:')) {
      hasDescription = true;
    }
  }

  // Name check
  if (!nameVal) {
    error(`skills/${folder}/SKILL.md missing 'name' in frontmatter`);
  } else {
    if (nameVal !== folder) {
      error(`skills/${folder}/SKILL.md frontmatter name '${nameVal}' does not match folder '${folder}'`);
    } else if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(nameVal)) {
      error(`skills/${folder} name '${nameVal}' is not valid kebab-case`);
    } else {
      success(`skills/${folder} valid name (${nameVal})`);
    }
  }

  // Description check
  if (!hasDescription) {
    error(`skills/${folder}/SKILL.md missing 'description' in frontmatter`);
  } else {
    success(`skills/${folder} has frontmatter description`);
  }
});

// 2. Scan for secret leakage or leftover USERNAME placeholders
const secretPatterns = [
  /-----BEGIN\s+(RSA|OPENSSH|DSA|EC|PGP)?\s*PRIVATE KEY-----/i,
  /AKIA[0-9A-Z]{16}/,
  /sk-[a-zA-Z0-9]{20,}/,
  /ghp_[a-zA-Z0-9]{36}/
];

function scanDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name === '.git' || entry.name === 'node_modules' || entry.name === 'dist') continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scanDirectory(fullPath);
    } else if (entry.isFile()) {
      // Check text files
      const ext = path.extname(entry.name);
      if (['.md', '.yml', '.yaml', '.json', '.js', '.txt'].includes(ext) || entry.name === 'LICENSE') {
        const fileContent = fs.readFileSync(fullPath, 'utf8');

        // Check secret patterns
        for (const pattern of secretPatterns) {
          if (pattern.test(fileContent)) {
            error(`Potential secret detected in ${path.relative(ROOT_DIR, fullPath)} matching ${pattern}`);
          }
        }

        // Check unresolved USERNAME placeholder in active guides
        const relPath = path.relative(ROOT_DIR, fullPath).replace(/\\/g, '/');
        if (relPath === 'README.md') {
          if (fileContent.includes('USERNAME/')) {
            error(`Unresolved placeholder 'USERNAME/' found in ${relPath}`);
          }
        }
      }
    }
  }
}

info('Scanning repository for secrets and unresolved placeholders...');
scanDirectory(ROOT_DIR);

if (hasErrors) {
  console.error('\n❌ Skill validation FAILED. See errors above.');
  process.exit(1);
} else {
  console.log('\n✨ All skill validation checks PASSED successfully!');
  process.exit(0);
}
