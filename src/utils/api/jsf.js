const jsf = require('json-schema-faker')
const videoSchema = require('./mockDataSchema')
const fs = require('fs-extra')
const chalk = require('chalk')
const log = console.log

/**
 * This file gxenerates the JSON file to be served by Json-server
 */
let apiJson

jsf.resolve(videoSchema)
    .then(videoData => {
        apiJson = JSON.stringify(videoData, null, '\t')
        log(chalk.blue(`apiJson = ${apiJson}`))

        // Write into file
        fs.outputFile("./src/utils/api/fakeApi.json", apiJson)
            .then(data => {
                log(chalk.green("Mock video data generated."))
            }
            )
            .catch(error => {
                log(chalk.red(`output file error ${error}`))
            })
    }
    ).catch(error => log(chalk.red(`schema is not resolved: ${error}`)))

