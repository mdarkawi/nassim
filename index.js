const express = require('express')
const app = express()
const shell = require('shelljs');

app.get('/', function (req, res) {

    const monScriptShell = 'ls /';
    const data = shell.exec(monScriptShell).stdout
    console.log('===>',data)
    res.send(`mes données:  ${data}`)
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})