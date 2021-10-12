#!/usr/bin/env node

import logSymbols from 'log-symbols';
import boxen from 'boxen';
import cliAlerts from 'cli-alerts';
import enquirerPkg from 'enquirer';
// because it's a CommonJS package
const { prompt, Confirm, Toggle } = enquirerPkg;

import { init } from './utils/init.js';
import { name, bio, social, ad, blog, site } from './utils/data.js';
import { cli } from './utils/cli.js';
import { debug } from './utils/debug.js';
import { stats } from './utils/stats.js';
import { posts } from './utils/posts.js';

const input = cli.input;
const flags = cli.flags;

(async () => {
  // Init and help
  init(flags.minimal, flags.clear);
  input.includes('help') && cli.showHelp(0);

  const prompt = new Toggle({
    message: 'Before proceeding, please respond:'
  });
  const response = await prompt.run();

  console.log('response', response);

  // Print out the info
  flags.ad && cliAlerts({type: `info`, msg: ad});
  flags.bio &&
  console.log(boxen(name, {padding: 1, dimBorder: true} )),
  console.log(bio);
  flags.social && console.log(social);
  flags.posts && cliAlerts({type: `info`, msg: blog, name: site});
  flags.posts && (await posts());

  // stats
  await stats();

  // debug info if needed
  debug(flags.debug, cli);

})();

// NOTES:

// ALTERNATIVE way of expressing 'Print out the info' above

  // if (flags.bio) {
  //   console.log(name);
  //   console.log(bio);
  // }

  // if (flags.social) {
  //   console.log(social);
  // }

  // if (flags.ad) {
  //   cliAlerts({type: `info`, msg: ad});
  // }

// ALTERNATIVE enquirer prompts

// const questions = [
//   {
//     type: 'input',
//     name: 'name',
//     message: 'What is your name?',
//   },
//   {
//     type: 'input',
//     name: 'username',
//     message: 'What is your username?',
//   }
// ];

// const response = await prompt(questions);
