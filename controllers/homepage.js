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

    let var_username = "Bobby";

    let fruits = ["Pommes","Poires","Bananes"];

    // response.render('nom de la vue', objet de données a transmerttre à la vue );
    response.render('homepage', {
        username: var_username,
        fruits: fruits
    });

};

// Ajout de la definition de la page au registre de routage de Express
router.get(path, controller);



// Module export
// --

module.exports = router;