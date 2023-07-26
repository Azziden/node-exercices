const fsStat = require('node:fs');

const stats = fsStat.statSync('./archivo.txt');

console.log(
  stats.isFile(),
  stats.isDirectory(),
  stats.isSymbolicLink(),
  stats.size
);
