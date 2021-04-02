import { Command } from 'commander'
import pkg from '../package.json'
import append from './action/append'

const program = new Command()

program
  .version(pkg.version)
  .arguments('<cmd> <alias>')
  .description('append an alias', {
    cmd: 'your command',
    alias: "your command's alias",
  })
  .action(append)

program.parse(process.argv)
