#!/usr/bin/env node

var CLIEngine = require('eslint').CLIEngine

var input = ''
process.stdin.on('data', function(data) {
    input += data
}).on('end', function() {
    var cliEngine = new CLIEngine({fix: true})
    var report, output
    try {
        report = cliEngine.executeOnText(input)
        output = report.results[0].output
    } catch (err) {
        // Missing `.eslintc` or whatnot
        // process.stderr.write(err)
    }
    process.stdout.write(output || input)
})
