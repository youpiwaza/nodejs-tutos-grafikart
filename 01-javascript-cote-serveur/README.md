# Javascript côté serveur

🔍 Url des tutoriaux : [le site officiel](https://grafikart.fr/tutoriels/javascript-server-nodejs-2080#autoplay).

## Apprendre le JavaScript : JavaScript côté serveur

[Vidéo](https://www.youtube.com/watch?v=o5UAtZUx7l0)

### Notes

NodeJs > créateur pas satisfait > à créé Deno (node à l'envers)

Bun > alternative, Node en plus rapide ?

Pour production > favoriser NodeJs

NodeJs > Utiliser le système de callback afin de gratter du temps sur les accès aux ressources (sur le disque)

Code non bloquant > création de callback a la volée avec des fonctions fléchées.

### Inconvénients

Attention, afin de profiter au max de NodeJs > favoriser l'asynchrone & les promesses.

Attention single thread > éviter les gros calculs

Bas niveau > besoin de librairies pour les serveurs web

---

## Installations

## Windows

[Vidéo](https://grafikart.fr/tutoriels/nodejs-install-windows-2081)

## WSL avec Volta

[Vidéo](https://youtu.be/g01qBs1CpAc)

Permet de gérer plusieurs versions de NodeJs

[Site offi](https://volta.sh/)

```bash
# install Volta
curl https://get.volta.sh | bash
# Besoin de relancer le terminal

# install Node
volta install node

# start using Node
node

# Passer sur la dernière version de node
volta install node@20

node --version
# v20.6.0
```

### Création du projet avec version de node spécifiée

```bash
# cd /home/youpiwaza/nodejs/tutoriaux/grafikart
mkdir demo
cd demo

# Créer le projet
npm init -y

# Fixer la version
volta pin node@20
```

---
