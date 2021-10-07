#!/usr/bin/env node

import * as fs from 'fs';
import cliWelcome from 'cli-welcome';
import chalk from 'chalk';
import logSymbols from 'log-symbols';

const pkgJSON = JSON.parse(fs.readFileSync('./package.json'));
const log = console.log;
const dim = chalk.dim;
const twitterClr = chalk.hex(`#1da1f2`);
const githubClr = chalk.hex(`#6cc644`);
const cxClr = chalk.red;

// Alerts
const success = chalk.green;
const info = chalk.blue;
const warning = chalk.keyword('orange');
const error = chalk.redBright.bold;

cliWelcome({
  title: pkgJSON.name,
  tagLine: `Hello!`,
  description: pkgJSON.description,
  version: pkgJSON.version,
  bgColor: `#e3e6e8`,
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
${logSymbols.success} ${success(`SUCCESS`)}: Thanks for checking out my CLI.
${logSymbols.info} ${info(`INFO`)}: I'm learning how to build CLI tools.
${logSymbols.warning} ${warning(`WARNING`)}: My CLI tools are in early development.
${logSymbols.error} ${error(`ERROR`)}: I'm unavailable right now. Try contacting me later.
`);
