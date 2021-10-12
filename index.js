#!/usr/bin/env node

import logSymbols from 'log-symbols';
import boxen from 'boxen';
import cliAlerts from 'cli-alerts';
import cliHandleError from 'cli-handle-error';

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

  // Print out the info
  flags.ad && cliAlerts({type: `info`, msg: ad});
  flags.bio &&
  console.log(boxen(name, {padding: 1, dimBorder: true} )),
  console.log(bio);
  flags.social && console.log(social);
  flags.posts && cliAlerts({type: `info`, msg: blog, name: site});
  flags.posts && (await posts());

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

  // stats
  await stats();

  // debug info if needed
  debug(flags.debug, cli);

})();

