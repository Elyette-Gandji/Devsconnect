# Architecture

```
projet/
|-- back/
|   |-- package.json (contenant les scripts pour le backend)
|   |-- index.js (point d'entrée du backend)
|   |-- ... (autres fichiers du backend)
|
|-- front/
|   |-- package.json (contenant les scripts pour le frontend)
|   |-- index.html (point d'entrée du frontend)
|   |-- ... (autres fichiers du frontend)
|
|-- ... (autres dossiers du projet)
```

## Back

```
  "name": "back",
  "version": "1.0.0",
  "description": "",
  "main": "back/index.js",
  "scripts": {
    "dev": "NODE_ENV=development DEBUG=app:* npx nodemon",
    "start": "NODE_ENV=production node back/index.js"
  },
```

- "dev": "NODE_ENV=development DEBUG=app:* npx nodemon"

Le script **"dev"** est destiné au développement de l'application.
Lorsque vous exécutez "npm run dev", cette commande sera lancée :
  - NODE_ENV=development: Cela définit la variable d'environnement NODE_ENV à "development". Cette variable d'environnement est utilisée pour indiquer que l'application est en mode développement. Cela peut être utile pour effectuer des actions spécifiques dans le code basées sur l'environnement de développement.
  - DEBUG=app:*: Cela définit la variable d'environnement DEBUG à "app:*". Cela permet d'activer les messages de débogage pour le module "debug" avec le préfixe "app:". Le module "debug" est souvent utilisé pour afficher des messages de débogage conditionnels dans l'application.
  - npx nodemon: Cela exécute la commande "nodemon" en utilisant npx. Nodemon est une dépendance de développement qui surveille les modifications de fichiers et redémarre automatiquement l'application lorsque des changements sont détectés. Cela facilite le processus de développement, car vous n'avez pas besoin de redémarrer manuellement le serveur après chaque modification du code.

- "start": "NODE_ENV=production node index.js"

Le script **"start"** est destiné à lancer l'application en production.
Lorsque vous exécutez "npm start", cette commande sera lancée :
  - NODE_ENV=production: Cela définit la variable d'environnement NODE_ENV à "production". Cette variable d'environnement est utilisée pour indiquer que l'application est en mode production. De même que pour le mode de développement, cela peut être utile pour effectuer des actions spécifiques dans le code basées sur l'environnement de production.
  - node index.js: Cela exécute le fichier "index.js" avec Node.js. Dans un scénario de production, l'application est exécutée sans surveillance de nodemon, car le redémarrage automatique n'est généralement pas nécessaire en production.

En résumé, les scripts "dev" et "start" vous permettent de lancer votre application dans différents environnements : "dev" est destiné au développement avec nodemon pour une mise à jour automatique lors des modifications, tandis que "start" est destiné à lancer l'application en production sans surveillance des changements. L'utilisation des variables d'environnement NODE_ENV et DEBUG permet de spécifier différents comportements de l'application en fonction de l'environnement dans lequel elle est exécutée.