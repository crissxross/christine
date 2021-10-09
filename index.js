#!/usr/bin/env node

import chalk from 'chalk';
import logSymbols from 'log-symbols';
import cliAlerts from 'cli-alerts';
import cliHandleError from 'cli-handle-error';

import { init } from './utils.js';
const args = process.argv.slice(2);

const dim = chalk.dim;
const twitterClr = chalk.hex(`#1da1f2`);
const githubClr = chalk.hex(`#6cc644`);
const cxClr = chalk.red;

// Alerts
const success = chalk.green;
const info = chalk.blue;
const warning = chalk.keyword('orange');
const error = chalk.redBright.bold;

const socialInfo = `
  ${cxClr(`Site`)}:    ${dim(`https://crissxross.net`)}
  ${twitterClr(`Twitter`)}: ${dim(`https://twitter.com/crissxross`)}
  ${githubClr(`GitHub`)}:  ${dim(`https://github.com/crissxross`)}
`
const printSocial = args.indexOf('--no-social') === -1;
const social = printSocial ? socialInfo : ``;

(async () => {
  init();

  const err = new Error(`Something went wrong!`);
  // cliHandleError(`TESTING CUSTOM ERROR`, err, true, false);

  console.log(`
    ${cxClr.bold.inverse(` Christine Wilks, PhD `)}

    ${chalk.cyanBright(
      `Digital writer, artist, developer and practice-based researcher. I create interactive narratives and creative web apps.`
    )}

    ${social}
  `);

  console.log(`
    ${logSymbols.success} ${success(`SUCCESS`)}: Thanks for checking out my CLI.
    ${logSymbols.info} ${info(`INFO`)}: I'm learning how to build CLI tools.
    ${logSymbols.warning} ${warning(`WARNING`)}: My CLI tools are in development & not ready for production use.
  `);

  cliAlerts({type: `info`, msg: `Christine is creating an interactive narrative for Writing New Body Worlds`});
  cliAlerts({type: `info`, msg: args, name: `ARGUMENTS`});

})();

