#!/usr/bin/env node

const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');
const chalk = require('chalk');
const log = console.log;
const dim = chalk.dim;
const twitterClr = chalk.hex(`#1da1f2`);
const githubClr = chalk.hex(`#6cc644`);
const cxClr = chalk.red;

// NOTE: log-symbols is now a pure ESM package so I intalled an earlier version 4.1.0 so I could use require as in tutorial
// For more INFO: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

// Alerts
const sym = require('log-symbols');
const success = chalk.green;
const info = chalk.blue;
const warning = chalk.keyword('orange');
const error = chalk.redBright.bold;

welcome({
  title: pkgJSON.name,
  tagLine: `Hello!`,
  description: pkgJSON.description,
  version: pkgJSON.version,
  bgColor: `#FADC00`,
	color: `#000000`,
	bold: true,
	clear: true,
});


log(`
${cxClr.bold.inverse(` Christine Wilks, PhD `)}

${chalk.cyanBright(
  `Digital writer, artist, developer and practice-based researcher. I create interactive narratives and creative web apps.`
)}

${cxClr(`Site`)}:    ${dim(`https://crissxross.net`)}
${twitterClr(`Twitter`)}: ${dim(`https://twitter.com/crissxross`)}
${githubClr(`GitHub`)}:  ${dim(`https://github.com/crissxross`)}

`);

log(`
${sym.success} ${success(`SUCCESS`)}: Thanks for checking out my CLI.
${sym.info} ${info(`INFO`)}: I'm learning how to build CLI tools.
${sym.warning} ${warning(`WARNING`)}: My CLI tools are in early development.
${sym.error} ${error(`ERROR`)}: I'm unavailable right now. Try contacting me later.
`);
