// Importation des dépendances
const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT ?? 4000;

// Configuration d'EJS comme moteur de modèle
app.set('view engine', 'ejs');

// Spécifier le chemin pour les vues et partials EJS (dossier views)
app.set('views', path.join(__dirname, 'src', 'views', 'pages'));
app.set('partials', path.join(__dirname, 'src', 'views', 'partials'));

// Middleware pour servir les fichiers statiques depuis le dossier public
app.use(express.static(path.join(__dirname, 'dist')));


// Route principale pour la page d'accueil
app.get('/', (req, res) => {
  // Rendre la vue EJS
  res.render('accueil');
});

// Route pour la page "projets"
app.get('/projects', (req, res) => {
  // Effectuer la requête GET vers votre API back-end
  fetch('http://localhost:4000/api/projects')
    .then(response => {
      // Vérifiez que la réponse est valide (statut 200 OK)
      if (!response.ok) {
        throw new Error('Error fetching projects');
      }
      return response.json(); // Parser la réponse en JSON
    })
    .then(data => {
      // Une fois les données récupérées, vous pouvez les utiliser pour afficher les projets dans la page "/projects"
      res.render('projects', { projects: data });
    })
    .catch(error => {
      console.error('Error fetching projects:', error);
      // En cas d'erreur, affichez un message d'erreur ou redirigez l'utilisateur vers une page d'erreur
      return response.json({ error: 'Error fetching projects' });
    });
});

// Lancer le serveur HTTP
app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});




// Lancer le serveur HTTP
app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
