#!/usr/bin/env node
(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
}((function () { 'use strict';

    var Command = require('commander').Command;
    var program = new Command();
    var pkg = require('../package.json');
    var shell = require('shelljs');
    var whoami = shell.exec('whoami', { silent: true }).stdout.trim();
    var path = require('path');
    var zshrcPath = path.join('/Users', whoami, '.zshrc');
    var fs = require('fs');
    program
        .version(pkg.version)
        .arguments('<cmd> <alias>')
        .description('append an alias', {
        cmd: 'your command',
        alias: "your command's alias",
    })
        .action(function (cmd, alias) {
        var aliasStr = "alias " + alias + "=\"" + cmd + "\"\n";
        try {
            fs.appendFile(zshrcPath, aliasStr, 'utf8', function (err) {
                if (err) {
                    console.log(err);
                }
            });
        }
        catch (error) {
            console.log(error);
        }
    });
    program.parse(process.argv);

})));
