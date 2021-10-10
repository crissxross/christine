#!/usr/bin/env node

import logSymbols from 'log-symbols';
import cliAlerts from 'cli-alerts';
import cliHandleError from 'cli-handle-error';

import { init } from './utils/init.js';
import * as data from './utils/data.js';

(async () => {
  init();
  console.log(data.name);
  console.log(data.bio);
  console.log(data.social);
  cliAlerts({type: `info`, msg: data.ad});
})();

