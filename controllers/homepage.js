"use strict";

// Appel des modules
const express = require('express');
const router = express.Router();



// Page definition
// --

// Definition du chemin de la page
const path = "/";

// Definition du controller de la page
const controller = (request, response) => {

    response.render('homepage')

};

// Ajout de la definition de la page au registre de routage de Express
router.get(path, controller);



// Module export
// --

module.exports = router;