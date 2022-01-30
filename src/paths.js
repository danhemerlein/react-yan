// const path = require('path');
// const fs = require('fs');

// Allow custom overrides package location
// const projectDir = path.resolve(fs.realpathSync(process.cwd()));
const projectDir = process.cwd();

console.log(projectDir);

// const customPath = require(path.resolve(projectDir, 'package.json'))[
//   'config-overrides-path'
// ];

const configOverrides = `${projectDir}react-yan-overrides`;

console.log(process.env.NODE_ENV);

module.exports = { configOverrides };
