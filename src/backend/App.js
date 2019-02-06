const express = require('express')
const app = express()
const getShows = require('./shows');
const port = process.env.PORT || 3001;
const path = require('path');

app.get('/rest/shows', (req, res) => res.send(getShows()))
console.log('xx', path.join(__dirname, '../../build'));
app.use(express.static(path.join(__dirname, '../../build')));
app.get('*', function (req, res) {
    console.log('YYYY', req.originalUrl)
    res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});

app.listen(port, () => console.log(`Kodflix app listening on port ${port}`))