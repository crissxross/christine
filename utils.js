import * as fs from 'fs';
import cliCheckNode from 'cli-check-node';
import cliWelcome from 'cli-welcome';
import cliHandleUnhandled from 'cli-handle-unhandled';

const pkgJSON = JSON.parse(fs.readFileSync('./package.json'));

export function init() {

  cliHandleUnhandled();

  cliWelcome({
    title: pkgJSON.name,
    tagLine: `Hello!`,
    description: pkgJSON.description,
    version: pkgJSON.version,
    bgColor: `#e3e6e8`,
    color: `#000000`,
    bold: true,
    clear: true,
  });

  cliCheckNode('14');
}
