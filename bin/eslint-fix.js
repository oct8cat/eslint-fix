#!/usr/bin/env node

var input = ''
process.stdin.on('data', function(data) {
    input += data
}).on('end', function() {
    var CLIEngine, cliEngine, report, output
    try {
        CLIEngine = require('eslint').CLIEngine
        cliEngine = new CLIEngine({fix: true})
        report = cliEngine.executeOnText(input)
        output = report.results[0].output

        if (!output) {
          // if no fixes were made, output is undefined
          output = input
        }
    } catch (err) {
        // Missing `eslint`, `.eslintrc`
        // process.stderr.write(err)
        output = `// eslint-fix ¯\\(°_o)/¯: ${err}\r\n${input}`
    }
    process.stdout.write(output)
})
