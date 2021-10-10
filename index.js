#!/usr/bin/env node

import logSymbols from 'log-symbols';
import cliAlerts from 'cli-alerts';
import cliHandleError from 'cli-handle-error';

import { init } from './utils/init.js';
import { name, bio, social, ad } from './utils/data.js';
import { cli } from './utils/cli.js';
import { debug } from './utils/debug.js';


const input = cli.input;
const flags = cli.flags;

(async () => {
  init(flags.minimal);
  input.includes('help') && cli.showHelp(0);

  flags.bio && console.log(name) && console.log(bio);
  flags.social && console.log(social);
  flags.ad && cliAlerts({type: `info`, msg: ad});

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

  // debug info if needed
  debug(flags.debug, cli);

})();

