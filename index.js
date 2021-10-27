#!/usr/bin/env node

import boxen from 'boxen';
import alert from 'cli-alerts';
import enquirerPkg from 'enquirer';
// because it's a CommonJS package
const { Toggle } = enquirerPkg;

import { init } from './utils/init.js';
import { name, bio, social, ad, blog, site } from './utils/data.js';
import { cli } from './utils/cli.js';
import { debug } from './utils/debug.js';
import { stats } from './utils/stats.js';
import { posts } from './utils/posts.js';

const input = cli.input;
const flags = cli.flags;

// Init and help
init(flags.minimal, flags.clear);
input.includes('help') && cli.showHelp(0);

// Print out the info
flags.bio &&
console.log(boxen(name, {padding: 1, dimBorder: true} )),
console.log(bio);
flags.ad && alert({type: `info`, msg: ad});
flags.social && console.log(social);
flags.posts && alert({type: `info`, msg: blog, name: site});
flags.posts && (await posts());

// stats
await stats();

// debug info if needed
debug(flags.debug, cli);

// PROMPT EXAMPLE - uncomment to run
// const prompt = new Toggle({
//   message: 'Before proceeding, please respond:'
// });
// const response = await prompt.run();

// console.log('response', response);


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
