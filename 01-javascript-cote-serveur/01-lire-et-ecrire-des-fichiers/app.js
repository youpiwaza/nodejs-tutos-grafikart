console.log('hey')

// ! Read file

// * Synchrone
// import { readFileSync } from 'node:fs'

// const content = readFileSync('un-fichier-a-recuperer.txt', { encoding: 'utf8' } )
// console.log(content)



// * Asynchrone
// import { readFile } from 'node:fs'

// const content = readFile('un-fichier-a-recuperer.txt', { encoding: 'utf8' }, (err, data) => {
//     if (err) throw err
//     console.log(data)
//     }
// )
// console.log('Affiché avant asynchrone blah blah')



// * Promesses
//      @see    https://devdocs.io/node/fs#fspromisesreadfilepath-options
// import { readFile } from 'node:fs/promises'

// try {
//     const filePath = new URL('./un-fichier-a-recuperer.txt', import.meta.url)
//     // ! Besoin de await
//     //  @see    https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/await
//     //      L'opérateur await permet d'attendre la résolution d'une promesse (Promise).
//     //      Il ne peut être utilisé qu'au sein d'une fonction asynchrone (définie avec l'instruction async function).
//     const contents = await readFile(filePath, { encoding: 'utf8' })
//     console.log(contents)
// } catch (err) {
//     console.error(err.message)
// }



// * Test avec plusieurs promesses
// import { readFile } from 'node:fs/promises'
// const content = await Promise.all([
//     readFile('./un-fichier-a-recuperer.txt', { encoding: 'utf8' }),
//     readFile('./app.js', { encoding: 'utf8' }),
// ])
// console.log(content)



// ! Ecrire dans un fichier
// //      @see        https://devdocs.io/node/fs#fswritefilefile-data-options-callback
// import { writeFile }    from 'node:fs'
// import { Buffer }       from 'node:buffer'

// const data    = new Uint8Array(Buffer.from('Hello Node.js\n'))
// const options = {
//   // Lire écrire modifier ajouter etc.
//   flag: 'a'
// }

// writeFile('message.txt', data, options, (err) => {
//   if (err) throw err
//   console.log('The file has been saved!')
// })



// ! Copier > copy
// ! Supprimer > unlink



// ! Infos fichier > stat
// import { stat } from 'node:fs'

// stat('./un-fichier-a-recuperer.txt', (err, stats) => {
//   if (err) throw err
//   console.log(stats.isDirectory())
//   console.log(stats)
// })



// ! kwakiya dans err
// stat('./trololo', (err, stats) => {
//   if (err) throw err
//   console.log(stats.isDirectory())
//   console.log(stats)
// })
// // [Error: ENOENT: no such file or directory, stat './trololo'] {
// //   errno: -2,
// //   code: 'ENOENT',
// //   syscall: 'stat',
// //   path: './trololo'
// // }



// ! Edition à la volée avec open
// * Permet d'écrire plusieurs choses à la suite
// import { open } from 'node:fs/promises'

// const file = await open('./un-nouveau-fichier.txt', 'a')
// file.write('Hello\n')
// file.close()



// ! Gestion de l'arborescence & des différents OS, cf. dossier /demo
// import { readFile } from 'node:fs/promises'

// try {
//     // * Utilisation de URL ça résoud le problème de fichier non trouvé à cause de l'arborescence
//     const filePath = new URL('demo/demo-deep.txt', import.meta.url)
//     const contents = await readFile(filePath, { encoding: 'utf8' })
//     console.log(contents)
// } catch (err) {
//     console.error(err.message)
// }

import { watch } from 'node:fs/promises'

// KO
const watcher = watch('./')
// const watcher = watch(__filename)

// const filePath = new URL('./', import.meta.url)
// const filePath = new URL('/', import.meta.url)
// const watcher = watch(filePath)

for await (const event of watcher) {
  console.log(event)
}
