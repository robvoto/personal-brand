const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');
const { projectRoot } = require('./constants');

test('documentation exists for local run and deployment', async () => {
  const readme = fs.readFileSync(path.join(projectRoot, 'README.md'), 'utf8');
  const deployment = fs.readFileSync(path.join(projectRoot, 'DEPLOYMENT.md'), 'utf8');
  const notes = fs.readFileSync(path.join(projectRoot, 'NOTES.md'), 'utf8');

  expect(readme).toContain('python -m http.server 8001');
  expect(readme).toContain('npm test');
  expect(deployment).toContain('robvoto.com');
  expect(deployment).toContain('185.199.108.153');
  expect(deployment).toContain('knowme.robvoto.com');
  expect(notes).toContain('Hero video');
});
