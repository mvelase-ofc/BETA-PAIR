const express = require('express');
const app = express();
__path = process.cwd()
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8000;
let server = require('./techsyncqr.js'),
    code = require('./pair');
require('events').EventEmitter.defaultMaxListeners = 500;
app.use('/techsyncqr', server);
app.use('/code', code);
app.use('/pair',async (req, res, next) => {
res.sendFile(__path + '/pair.html')
})
app.use('/',async (req, res, next) => {
res.sendFile(__path + '/techsync.html')
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(PORT, () => {
    console.log(`
Successfully Deployed Techsync Session ID

 Server running on http://localhost:` + PORT)
})

module.exports = app


// powered by mvelase technology 

