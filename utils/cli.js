import meow from 'meow';
// import { green, yellow, cyan } from 'chalk';
import chalk from 'chalk';

const helpText = `
  Usage
    ${chalk.green(`npx christine-creates`)} ${chalk.yellow(`[--option]`)} ${chalk.cyan(`<command>`)}

  Options
    ${chalk.yellow(`--bio`)}         Print the bio info
    ${chalk.yellow(`--no-bio`)}      Don't print the bio info
    ${chalk.yellow(`--social`)}      Print the social info
    ${chalk.yellow(`--no-social`)}   Don't print the social info
    ${chalk.yellow(`--ad `)}         Print the ad info
    ${chalk.yellow(`--no-ad`)}       Don't print the ad info
    ${chalk.yellow(`-m, --minimal`)} Print minimal info
    ${chalk.yellow(`-d, --debug`)}   Print debugging info
    ${chalk.yellow(`-v, --version`)} Print CLI version

  Commands
    ${chalk.cyan(`help`)}          Print CLI help info

  Examples
    ${chalk.green(`npx christine-creates`)} ${chalk.yellow(`--no-social`)}
    ${chalk.green(`npx christine-creates`)} ${chalk.yellow(`--no-ad`)}

`;
const options = {
  importMeta: import.meta,
  flags: {
    minimal: {
      type: 'boolean',
      alias: 'm',
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
