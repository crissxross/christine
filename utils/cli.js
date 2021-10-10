import meow from 'meow';

const helpText = `
  Usage
    npx christine-creates [options] <commands >

  Options
    social        Print the social info
    --no-social   Don't print the social info
    ad            Print the ad info
    --no-ad       Don't print the ad info
    -d, --debug   Print debugging info
    -v, --version Print CLI version

  Commands
    help          Print CLI help info

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
