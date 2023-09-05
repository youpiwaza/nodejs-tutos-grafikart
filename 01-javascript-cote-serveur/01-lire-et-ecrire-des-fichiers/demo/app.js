import { readFile } from 'node:fs/promises'

// Habituelle mais KO lors de l'utilisation de modules
// console.log(__dirname) 

// OK
console.log(import.meta.url)

// ! Le tuto de Grafikart plus ancien & plus complexe, avec fileURLToPath & dirname & join

try {
    // KO
    // const contents = await readFile('demo-deep.txt', { encoding: 'utf8' })
    // ENOENT: no such file or directory, open '/mnt/c/Users/masam/Documents/_dev/_current/nodejs-tutos-grafikart/01-javascript-cote-serveur/01-lire-et-ecrire-des-fichiers/demo/un-fichier-a-recuperer.txt'
    
    // KO
    // const contents = await readFile('./demo-deep.txt', { encoding: 'utf8' })
    
    // OK mais pas pratique
    // const contents = await readFile('./demo/demo-deep.txt', { encoding: 'utf8' })
    
    // ! Utilisation de URL ça résoud le problème de fichier non trouvé à cause de l'arborescence
    // OK
    // const filePath = new URL('demo-deep.txt', import.meta.url)
    // * Exécuté depuis la racine du projet

    // OK
    const filePath = new URL('./demo-deep.txt', import.meta.url)
    const contents = await readFile(filePath, { encoding: 'utf8' })
    console.log(contents)
} catch (err) {
    console.error(err.message)
}