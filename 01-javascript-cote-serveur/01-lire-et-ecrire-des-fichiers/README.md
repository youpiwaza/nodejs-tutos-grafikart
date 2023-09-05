# Lire et écrire des fichiers

🔍 [Vidéo](https://www.youtube.com/watch?v=cT6b6_XzFmI)

```bash
# Dossier perso du projet
cd /mnt/c/Users/masam/Documents/_dev/_current/nodejs-tutos-grafikart/01-javascript-cote-serveur/01-lire-et-ecrire-des-fichiers

# Test
node app.js
# hey

# Projet + fixer version
npm init -y
volta pin node@20
```

- 🔍 [Node > file system](https://nodejs.org/api/fs.html)
- 🔍 [Devdocs > Node > file system](https://devdocs.io/node-file-system/)

Dans la doc > Noms avec Sync > Synchrone

Pas défaut cela ne gère pas les imports > 2 solutions

- Renomer en app.**m**js
- Sinon fichier de configuration via npm init > `package.json` > ajouter `"type": "module"`

---

Commentaires directement dans le code afin de gagner du temps

## Commandes

Commenter / décommenter directement dans le code

```bash
# Première partie
node app.js

# Avec arbo
node demo/app.js

# Watcher / KO
node app-watch.js
```
