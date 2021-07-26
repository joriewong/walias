import { Command } from 'commander'
import pkg from '../package.json'
import append from './action/append'

const program = new Command()

program
  .version(pkg.version)
  .arguments('<alias> <cmd>')
  .description('append an alias', {
    alias: "your command's alias",
    cmd: 'your command',
  })
  .action(append)

program.parse(process.argv)
