const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const build = path.join(root, 'build');
const homepage = new URL(require('../package.json').homepage);
assert.equal(homepage.href, 'https://zow1e.github.io/portfolio_1/');

const entries = new Set([
  'index.html', '.nojekyll', 'favicon.ico', 'favicon.svg', 'manifest.json',
  'asset-manifest.json', 'moreprojects/index.html', 'zowie-portfolio/index.html',
  'zowie-portfolio/moreprojects/index.html',
]);
let count = 0;
function inspect(directory) {
  for (const file of fs.readdirSync(directory, { withFileTypes: true })) {
    const absolute = path.join(directory, file.name);
    const relative = path.relative(build, absolute).split(path.sep).join('/');
    assert(!file.isSymbolicLink(), `Unexpected link: ${relative}`);
    if (file.isDirectory()) inspect(absolute);
    else {
      assert(entries.has(relative) || /^static\/(js|css|media)\/.+\.(js|css|map|txt|svg|woff2?|ttf|png|jpe?g|webp|ico)$/.test(relative), `Unexpected deployment file: ${relative}`);
      count++;
    }
  }
}
inspect(build);
for (const entry of entries) assert(fs.existsSync(path.join(build, entry)), `Missing deployment file: ${entry}`);

const html = fs.readFileSync(path.join(build, 'index.html'), 'utf8');
for (const [, asset] of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
  assert(asset.startsWith(homepage.pathname), `Incorrect asset base: ${asset}`);
  assert(fs.existsSync(path.join(build, asset.slice(homepage.pathname.length))), `Missing asset: ${asset}`);
}
const manifest = require(path.join(build, 'asset-manifest.json'));
for (const asset of Object.values(manifest.files)) {
  assert(asset.startsWith(homepage.pathname), `Incorrect manifest asset base: ${asset}`);
  assert(fs.existsSync(path.join(build, asset.slice(homepage.pathname.length))), `Missing manifest asset: ${asset}`);
}
console.log(`Verified ${count} deployment files, asset paths, and refreshable routes; no private documents included.`);
