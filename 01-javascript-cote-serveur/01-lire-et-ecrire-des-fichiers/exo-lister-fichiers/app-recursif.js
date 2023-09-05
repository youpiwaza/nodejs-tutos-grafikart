/*
* Doit afficher, avec gestion de l'arborescence des dossiers
D - Demo
F - app.js - 30ko
etc.
*/

// readdir  / Récupérer les infos du répertoire
// stat     / Récupérer les infos d'un fichier
import { readdir, stat } from 'node:fs/promises'

console.time('code')

try {
  listArbo('./')
  // listArbo('demo/')
  
} catch (err) {
  console.error(err)
}

async function listArbo( stringPath ) {
  // console.log(`listArbo ${stringPath}`)
  
  const path    = new URL(stringPath, import.meta.url)
  console.log(path)
  const options = { withFileTypes : true }
  const files   = await readdir(path, options)
  // console.log('files', files)

  await Promise.allSettled(
    files.map( async (file) => {
      console.log(file)
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
      // * C'est un répertoire, on réapelle la fonction
      else {
        console.warn(`Recursif pour ${file.name}`)
        listArbo(`./${file.name}/`)
      }

      console.log(toDisplay.join(' - '))
    })
  )
}
console.timeEnd('code')
