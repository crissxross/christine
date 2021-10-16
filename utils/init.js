import { readFile } from 'fs/promises';
import checkNode from 'cli-check-node';
import welcome from 'cli-welcome';
import handleUnhandled from 'cli-handle-unhandled';

const pkgJSON = JSON.parse(
  await readFile(
    new URL('./../package.json', import.meta.url)
  )
);

const init = (minimal, clear) => {

  handleUnhandled();

  !minimal &&
    welcome({
      title: pkgJSON.name,
      tagLine: `Hello!`,
      description: pkgJSON.description,
      version: pkgJSON.version,
      bgColor: `#e3e6e8`,
      color: `#000000`,
      bold: true,
      clear,
    });

  minimal && console.log();

  checkNode('12');
}

export { init };
