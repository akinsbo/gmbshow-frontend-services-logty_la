import * as React from 'react'
import path from 'path'
import fs from 'fs'
import express from 'express'
import ReactDOMServer from 'react-dom/server'
import App from '../../src/style/twemd/core/App'

const PORT = process.env.PORT || 3006
const app = express();
const BUILD_DIR = process.env.BUILD_DIR || "../server-build"
app.get('/', (req, res) => {
    const app = ReactDOMServer.renderToString(<App />)

    const indexFile = path.resolve(BUILD_DIR + "/index.html")
    //Read file and replace content
    fs.readFile(indexFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Something went wrong:', err)
            return res.status(500).send('Oops, better luck next time!')
        }

        return res.send(
            data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
        );
    });
});

app.use(express.static(BUILD_DIR));

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});