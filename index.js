"use strict";

const express = require('express');
const app = express();

const guessPort = require('./utils/port');
const port = guessPort();


// App Settings
// --


// App Setup 
// --



// Routing
// --



// Start server App
// --

app.listen(port , () => {
    console.log("App listening on port", port);
});

