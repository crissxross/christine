#!/usr/bin/env node

const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');

welcome({
  title: pkgJSON.name,
  tagLine: `Hello!`,
  description: pkgJSON.description,
  version: pkgJSON.version,
  bgColor: `#FADC00`,
	color: `#000000`,
	bold: true,
	clear: true,
})


console.log(`
Christine Wilks, PhD

Digital writer, artist, developer and practice-based researcher. I create interactive narratives and creative web apps.

Site:    https://crissxross.net
Twitter: https://twitter.com/crissxross
GitHub:  https://github.com/crissxross

`);
