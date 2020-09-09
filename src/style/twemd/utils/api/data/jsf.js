const jsf = require('json-schema-faker')
const schema = require('./mockDataSchema')
const fs = require('fs-extra')
const chalk = require('chalk')
const log = console.log

/**
 * This file gxenerates the JSON file to be served by Json-server
 */
let apiJson
const output_file_path = "fakeApi.json"

jsf.resolve(schema)
    .then(schemObjectData => {
        apiJson = JSON.stringify(schemObjectData, null, '\t')
        log(chalk.blue(`apiJson = ${apiJson}`))

        // Write into file
        fs.outputFile(output_file_path, apiJson)
            .then(data => {
                log(chalk.green("Mock data generated."))
            })
            .catch(error => {
                log(chalk.red(`output file error ${error}`))
            })
    }).catch(error => log(chalk.red(`schema is not resolved: ${error}`)))