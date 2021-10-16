import alert from 'cli-alerts';

const debug = (isDebug, cli) => {
  if (!isDebug) {
    return;
  }
    alert({type: `warning`, msg: `DEBUGGING INFO ↓`});
    console.log(`input`, cli.input);
    console.log(`flags`, cli.flags);
    console.log();
};

export { debug };
