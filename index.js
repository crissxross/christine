#!/usr/bin/env node

import chalk from 'chalk';
import logSymbols from 'log-symbols';
import cliAlerts from 'cli-alerts';
import { init } from './utils.js';

const dim = chalk.dim;
const twitterClr = chalk.hex(`#1da1f2`);
const githubClr = chalk.hex(`#6cc644`);
const cxClr = chalk.red;

// Alerts
const success = chalk.green;
const info = chalk.blue;
const warning = chalk.keyword('orange');
const error = chalk.redBright.bold;

(() => {
  init();

  // Promise.reject(new Error('THIS_IS_UNHANDLED'));

  console.log(`
  ${cxClr.bold.inverse(` Christine Wilks, PhD `)}

  ${chalk.cyanBright(
    `Digital writer, artist, developer and practice-based researcher. I create interactive narratives and creative web apps.`
  )}

  ${cxClr(`Site`)}:    ${dim(`https://crissxross.net`)}
  ${twitterClr(`Twitter`)}: ${dim(`https://twitter.com/crissxross`)}
  ${githubClr(`GitHub`)}:  ${dim(`https://github.com/crissxross`)}

  `);

  console.log(`
  ${logSymbols.success} ${success(`SUCCESS`)}: Thanks for checking out my CLI.
  ${logSymbols.info} ${info(`INFO`)}: I'm learning how to build CLI tools.
  ${logSymbols.warning} ${warning(`WARNING`)}: My CLI tools are in early development.
  ${logSymbols.error} ${error(`ERROR`)}: I'm unavailable right now. Try contacting me later.
  `);

  cliAlerts({type: `info`, msg: `Christine is creating an interactive narrative for Writing New Body Worlds`});
})();

