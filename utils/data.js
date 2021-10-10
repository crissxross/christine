import chalk from 'chalk';

const dim = chalk.dim;
const twitterClr = chalk.hex(`#1da1f2`);
const githubClr = chalk.hex(`#6cc644`);
const cxClr = chalk.red;

const name = `${cxClr.bold.inverse(` Christine Wilks, PhD `)}`;

const bio = `${chalk.cyanBright(
  `Digital writer, artist, developer and practice-based researcher. I create interactive narratives and creative web apps.`
)}`;

const social = `
  ${cxClr(`Site`)}:    ${dim(`https://crissxross.net`)}
  ${twitterClr(`Twitter`)}: ${dim(`https://twitter.com/crissxross`)}
  ${githubClr(`GitHub`)}:  ${dim(`https://github.com/crissxross`)}
`
const ad = `Christine is creating an interactive narrative for Writing New Body Worlds`;

export {
  name,
  bio,
  social,
  ad
}
