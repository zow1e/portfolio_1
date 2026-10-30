const fs = require('fs');
const path = require('path');

const build = path.resolve(__dirname, '../build');
const index = path.join(build, 'index.html');

// Pages cannot rewrite browser routes. Give existing archive/legacy routes
// real entry files so direct visits and refreshes return HTTP 200.
for (const route of ['moreprojects', 'zowie-portfolio', 'zowie-portfolio/moreprojects']) {
  const destination = path.join(build, route);
  fs.mkdirSync(destination, { recursive: true });
  fs.copyFileSync(index, path.join(destination, 'index.html'));
}
fs.writeFileSync(path.join(build, '.nojekyll'), '');
console.log('Prepared static entry files for GitHub Pages.');
