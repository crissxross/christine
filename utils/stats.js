import axios from "axios";
// import fetch from 'node-fetch';
import cliHandleError from 'cli-handle-error';
import { to } from 'await-to-js';

const apiURL = `https://api.github.com/users/crissxross`;

const stats = async () => {
  // const res = await fetch(apiURL);
  // const data = await res.json();
  // console.log('data', data);

  const [error, res] = await to(axios.get(apiURL));
  cliHandleError(`API CALL FAILED`, error, true, true);

  const ghFollowers = res.data.followers;

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
