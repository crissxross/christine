import meow from 'meow';
import chalk from 'chalk';

const g = chalk.green;
const c = chalk.cyan;
const y = chalk.yellow;
const dim = chalk.dim;

// NOTE: I've reverted back to using without meowHelp because it wasn't working properly (see cli.v2.js)

const helpText = `
  ${g.inverse.bold(` Usage `)}

    ${g(`npx christine-creates`)} ${c(`<command>`)} ${y(`[--option]`)}

  ${c.inverse.bold(` Commands `)}

    ${c(`help`)}          Print CLI help info

  ${y.inverse.bold(` Options `)}

    ${y(`--bio`)}         Print the bio info ${dim(`Default ${y(`true`)}`)}
    ${y(`--no-bio`)}      Exclude the bio info
    ${y(`--social`)}      Print the social info ${dim(`Default ${y(`true`)}`)}
    ${y(`--no-social`)}   Exclude the social info
    ${y(`--ad `)}         Print the ad info ${dim(`Default ${y(`true`)}`)}
    ${y(`--no-ad`)}       Exclude the ad info
    ${y(`--clear `)}      Clear the console ${dim(`Default ${y(`true`)}`)}
    ${y(`--no-clear`)}    Don't clear the console
    ${y(`-p, --posts`)}   Print blog posts
    ${y(`-m, --minimal`)} Print minimal info
    ${y(`-d, --debug`)}   Print debugging info
    ${y(`-v, --version`)} Print CLI version
`;

const options = {
  importMeta: import.meta,
  flags: {
    minimal: {
      type: 'boolean',
      alias: 'm',
    },
    clear: {
      type: 'boolean',
      default: true,
    },
    bio: {
      type: 'boolean',
      default: true,
    },
    social: {
      type: 'boolean',
      default: true,
    },
    ad: {
      type: 'boolean',
      default: true,
    },
    posts: {
      type: 'boolean',
      default: false,
      alias: 'p',
    },
    debug: {
      type: 'boolean',
      default: false,
      alias: 'd'
    },
    version: {
      type: 'boolean',
      default: false,
      alias: 'v'
    },
  }
};
const cli = meow(helpText, options);

export { cli };
