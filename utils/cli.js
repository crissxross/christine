import meow from 'meow';

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

export { cli };
