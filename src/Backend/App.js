const express = require('express')
const app = express()
const port = 3001
const getShows = require('./listofshows');

app.get('/rest/listofshows', (req, res) => res.send(getShows()))

app.listen(port, () => console.log(`Example app listening on port ${port}`))