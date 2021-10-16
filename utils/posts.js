import ora from "ora";
import axios from "axios";
import { to } from 'await-to-js';
import chalk from "chalk";
import handleError from 'cli-handle-error';
import stripHtml from 'cli-strip-html';

const spinner = ora({text: ''});
// I'm cheating - fetching Awais's posts because my blog doesn't have an API
const apiURL = `https://Awais.dev/api/posts`;

const posts = async () => {
  spinner.start(chalk.dim(`Fetching blog posts...`));

  const [error, res] = await to(axios.get(apiURL));
  handleError(`API CALL FAILED`, error, true, true);

  const posts = res.data.map(post => {
    return {
      title: stripHtml(post.title.rendered),
      link: post.link
    }
  });

  spinner.succeed(chalk.dim('Blog posts fetched (from Awais)'));
  // spinner.stop();

  posts.map(({title, link}, index) => {
    console.log(`
      ${chalk.dim(`${++index}:`)} ${title}
      ${chalk.dim(`${link}`)}
    `);
  });
}

export { posts }
