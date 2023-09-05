/*
* Doit afficher
D - Demo
F - app.js - 30ko
etc.
*/

// readdir  / Récupérer les infos du répertoire
// stat     / Récupérer les infos d'un fichier
import { readdir, stat } from 'node:fs/promises'

console.time('code')

try {
  const path    = new URL('./', import.meta.url)
  // console.log(path)
  const options = { withFileTypes : true }
  const files   = await readdir(path, options)

  // ! Si utilisation de await dans un boucle, le chargement des fichiers n'est pas concurrentiel
  // for (const file of files) {
  //   // console.log(file)
  //   const { size } = await stat(file.name)

  //   const isDirectory = file.isDirectory()

  //   const toDisplay = [
  //     // Type Dossier ou Fichier
  //     isDirectory ? 'D' : 'F',
  //     // Nom du fichier
  //     file.name,
  //   ]

  //   if(!isDirectory){
  //     toDisplay.push(size + 'o')
  //   }

  //   console.log(toDisplay.join(' - '))
  // }



  // ! Gestion via les Promesses, on lance une promesse pour chacun
  // *    Mais on peut optimiser en crééant un tableau de Promesses via map
  // files.forEach( async (file) => {
  //   // console.log(file)
  //   const { size } = await stat(file.name)

  //   const isDirectory = file.isDirectory()

  //   const toDisplay = [
  //     // Type Dossier ou Fichier
  //     isDirectory ? 'D' : 'F',
  //     // Nom du fichier
  //     file.name,
  //   ]

  //   if(!isDirectory){
  //     toDisplay.push(size + 'o')
  //   }

  //   console.log(toDisplay.join(' - '))
  // })


  
  // ! Attente de la résolution de l'ensemble des promesses (tableau créé via map)
  await Promise.allSettled(
    files.map( async (file) => {
      // console.log(file)
      const { size } = await stat(file.name)

      const isDirectory = file.isDirectory()

      const toDisplay = [
        // Type Dossier ou Fichier
        isDirectory ? 'D' : 'F',
        // Nom du fichier
        file.name,
      ]

      if(!isDirectory){
        toDisplay.push(size + 'o')
      }

      console.log(toDisplay.join(' - '))
    })
  )
} catch (err) {
  console.error(err)
}

console.timeEnd('code')
