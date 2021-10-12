import ora from "ora";
import chalk from "chalk";
import axios from "axios";
import cliHandleError from 'cli-handle-error';
import { to } from 'await-to-js';

const spinner = ora({text: ''});
const apiURL = `https://api.github.com/users/crissxross`;

const stats = async () => {
  spinner.start(`${chalk.yellow(`FOLLOWERS`)} fetching...`);

  const [error, res] = await to(axios.get(apiURL));
  cliHandleError(`API CALL FAILED`, error, true, true);

  const ghFollowers = res.data.followers;

  spinner.succeed(`${chalk.green(`FOLLOWERS`)} fetched`);
  // spinner.stop();

  console.log(`
    Github followers: ${ghFollowers}
  `);

  // try {
  //   const res = await axios.get(apiURL);
  //   const ghFollowers = res.data.followers;
  //   console.log(`
  //     Github followers: ${ghFollowers}
  //   `);
  // } catch (error) {
  //   cliHandleError(`API CALL FAILED`, error, false, false);
  // }

};

export { stats }
