import meow from 'meow';
import cliMeowHelp from 'cli-meow-help';
// import chalk from 'chalk';

// FIXME: does not convert camelCase to kebab-case in the help print out
// I don't know why it doesn't, it seems same as Avais version - see 10-CLI Projects > 25-cli-meow-help
const flags = {
  ad: {
    type: 'boolean',
    default: true,
    desc: `Print the ad`,
  },
  noAd: {
    type: 'boolean',
    default: false,
    desc: `Do not print the ad (use kebab-case)`,
  },
  bio: {
    type: 'boolean',
    default: true,
    desc: `Print the bio`,
  },
  noBio: {
    type: 'boolean',
    default: false,
    desc: `Do not print the bio (use kebab-case)`,
  },
  clear: {
    type: 'boolean',
    default: false,
    desc: `Clear the console`,
  },
  debug: {
    type: 'boolean',
    default: false,
    alias: 'd',
    desc: `Print the debug info`,
  },
  minimal: {
    type: 'boolean',
    alias: 'm',
    desc: `Print minimal info`
  },
  posts: {
    type: 'boolean',
    default: false,
    alias: 'p',
    desc: `Print blog posts`
  },
  social: {
    type: 'boolean',
    default: true,
    desc: `Print social links`,
  },
  noSocial: {
    type: 'boolean',
    default: false,
    desc: `Do not print social links (use kebab-case)`,
  },
  version: {
    type: 'boolean',
    default: false,
    alias: 'v',
    desc: `Print CLI version`,
  },
}

const commands = {
  help: {
    desc: `Print the help info`,
  }
}

const helpText = cliMeowHelp({
  name: `npx christine-creates`,
  flags,
  commands,
});

const options = {
  importMeta: import.meta,
  // description: false,
  inferType: true,
  hardRejection: false,
  flags,
};

const cli = meow(helpText, options);

export { cli };
