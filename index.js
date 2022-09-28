"use strict";

const ejs = require('ejs');
const path = require('path');

const express = require('express');
const app = express();

const guessPort = require('./utils/port');
// const port = guessPort();
const port = 3000;


// App Setup 
// --

// Definition du moteur de rendu,
// On precise à Express que le moteur de rendu des vues se fera avec le module "ejs"
// Le module "ejs", transmet à Express ses paramètres avec la propriete "__express"
app.engine('.html', ejs.__express);

// Définition du répertoire de stockage des fichiers de vues
// path.join() va resoudre automatiquement le chemin absolut du repertoire "views"
app.set('views', path.join(__dirname, "views"));


// Utilisation du moteur de rendu HTML
app.set('view engine', 'html');

// Ajoute l'accès au répertoire "public"
app.use( express.static( path.join(__dirname, "public") ) );



// Routing
// --

app.use(require('./controllers/homepage'));
app.use(require('./controllers/about'));
app.use(require('./controllers/contact'));

// Création de la page 404
app.use(function(req, res){
    res.status(404);
    res.render('404', { 
        host: req.hostname,
        url: req.url 
    })
});




// Start server App
// --

app.listen(port , () => {
    console.log("App listening on port", port);
});
