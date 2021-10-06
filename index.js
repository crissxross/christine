#!/usr/bin/env node

const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');
const chalk = require('chalk');
const log = console.log;
const dim = chalk.dim;
const twitterClr = chalk.hex(`#1da1f2`);
const githubClr = chalk.hex(`#6cc644`);
const cxClr = chalk.red;

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


log(`
${cxClr.bold.inverse(` Christine Wilks, PhD `)}

${chalk.cyanBright(
  `Digital writer, artist, developer and practice-based researcher. I create interactive narratives and creative web apps.`
)}

${cxClr(`Site`)}:    ${dim(`https://crissxross.net`)}
${twitterClr(`Twitter`)}: ${dim(`https://twitter.com/crissxross`)}
${githubClr(`GitHub`)}:  ${dim(`https://github.com/crissxross`)}

`);
