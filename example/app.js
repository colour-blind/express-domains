const express = require('express');
const domain = require('express-domains');
const app = express();

app.get('/', domain('yourwebsite.com'), function(req, res) {
    // Will only continue if the website the client connected to matches 'yourwebsite.com'
    res.send('Hello World');
});

app.listen(80, () => console.log('Express server started'));