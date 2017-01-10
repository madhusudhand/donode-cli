/* eslint-disable no-console */

const cli     = require('commander');
const pkg     = require('../../package.json');
const donode  = require('export-files')(`${__dirname}/commands`);
// const colors  = require('colors');

cli.name = 'donode';
cli.version(pkg.version)
  .usage('<command> [options]');

cli.command('new <app-name>')
  .description('Create donode app')
  .action((appName, options) => {
    donode.create(appName, {
      // no options yet
    });
  });

cli.arguments('<cmd>')
  .action((cmd) => {
    console.log(
        `\n ${colors.red(`[ERROR] - Invalid command: ${cmd}`)}
        \n Run "donode --help" for a list of available commands.\n`
      );
    process.exit(0);
  });

cli.parse(process.argv);
Error.stackTraceLimit = Infinity;

if (!cli.args.length) {
  cli.parse([process.argv[0], process.argv[1], '-h']);
  process.exit(0);
}
