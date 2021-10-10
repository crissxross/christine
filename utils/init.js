import { readFile } from 'fs/promises';
import cliCheckNode from 'cli-check-node';
import cliWelcome from 'cli-welcome';
import cliHandleUnhandled from 'cli-handle-unhandled';

const pkgJSON = JSON.parse(
  await readFile(
    new URL('./../package.json', import.meta.url)
  )
);

const init = (minimal, clear) => {

  cliHandleUnhandled();

  !minimal &&
    cliWelcome({
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

  cliCheckNode('12');
}

export { init };
