#!/usr/bin/env node
/**
 * scripts/package-skills.js
 * Packages each skill in `skills/<name>` into `dist/<name>.skill` (zip format)
 * using standard forward-slash entry names for universal compatibility (Linux/macOS/Claude).
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT_DIR = path.resolve(__dirname, '..');
const SKILLS_DIR = path.join(ROOT_DIR, 'skills');
const DIST_DIR = path.join(ROOT_DIR, 'dist');

if (!fs.existsSync(DIST_DIR)) {
  fs.mkdirSync(DIST_DIR, { recursive: true });
}

const isWindows = process.platform === 'win32';

if (isWindows) {
  const ps1Path = path.join(__dirname, 'package-skills.ps1');
  execSync(`powershell -NoProfile -ExecutionPolicy Bypass -File "${ps1Path}"`, { stdio: 'inherit' });
} else {
  const skills = fs.readdirSync(SKILLS_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name);

  console.log(`📦 Packaging ${skills.length} skills into ${DIST_DIR}...`);

  skills.forEach(skill => {
    const skillSrc = path.join(SKILLS_DIR, skill);
    const zipDest = path.join(DIST_DIR, `${skill}.skill`);

    if (fs.existsSync(zipDest)) {
      fs.unlinkSync(zipDest);
    }

    try {
      execSync(`cd "${skillSrc}" && zip -r "${zipDest}" ./*`, { stdio: 'inherit' });
      const stat = fs.statSync(zipDest);
      console.log(`✅ Built: ${skill}.skill (${(stat.size / 1024).toFixed(1)} KB)`);
    } catch (err) {
      console.error(`❌ Failed to package ${skill}:`, err.message);
      process.exit(1);
    }
  });

  console.log(`\n🎉 Packaging complete! All packages built in dist/ with forward slashes.`);
}
