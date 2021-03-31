const { Command } = require('commander')
const program = new Command()
const pkg = require('../package.json')
const shell = require('shelljs')
const whoami = shell.exec('whoami', { silent: true }).stdout.trim()
const path = require('path')
const zshrcPath = path.join('/Users', whoami, '.zshrc')
const fs = require('fs')

program
  .version(pkg.version)
  .arguments('<cmd> <alias>')
  .description('append an alias', {
    cmd: 'your command',
    alias: "your command's alias",
  })
  .action((cmd: string, alias: string) => {
    const aliasStr = `alias ${alias}="${cmd}"`
    try {
      fs.appendFile(zshrcPath, aliasStr, 'utf8', (err: any) => {
        if (err) {
          console.log(err)
        }
      })
    } catch (error) {
      console.log(error)
    }
  })

program.parse(process.argv)
