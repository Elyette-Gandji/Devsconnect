// Importation des dépendances
const express = require('express');
const app = express();

// Configuration d'EJS comme moteur de modèle
app.set('view engine', 'ejs');

// Spécifier le chemin pour les vues EJS (dossier views)
app.set('views', __dirname + '/src/views');

// Middleware pour servir les fichiers statiques depuis le dossier public
app.use(express.static('public'));

// Route principale pour la page d'accueil
app.get('/', (req, res) => {
  // Rendre la vue EJS
  res.render('accueil');
});

// Port sur lequel le serveur va écouter
const port = 3000;
app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
