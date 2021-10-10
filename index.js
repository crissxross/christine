#!/usr/bin/env node

import meow from 'meow';
import logSymbols from 'log-symbols';
import cliAlerts from 'cli-alerts';
import cliHandleError from 'cli-handle-error';

import { init } from './utils/init.js';
import { name, bio, social, ad } from './utils/data.js';

const helpText = `
  Usage
    npx christine-creates [options]

  Options
    social       Show the social info
    --no-social  Don't show the social info
    ad           Show the ad info
    --no-ad      Don't show the ad info

  Examples
  npx christine-creates --no-social

`;
const options = {
  importMeta: import.meta,
  flags: {
    social: {
      type: 'boolean',
      default: true,
    },
    ad: {
      type: 'boolean',
      default: true,
    },
  }
};
const cli = meow(helpText, options);
const input = cli.input;
const flags = cli.flags;

(async () => {
  init();
  console.log(name);
  console.log(bio);

  if (flags.social) {
    console.log(social);
  }

  if (flags.ad) {
    cliAlerts({type: `info`, msg: ad});
  }

  cliAlerts({type: `info`, msg: `CLI DATA ↓`});
  console.log(`input`, input);
  console.log(`flags`, flags);
  console.log();
})();

