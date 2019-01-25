const express = require('express')
const app = express()
const port = 49365

console.log('XX', process.env.HOST)

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))