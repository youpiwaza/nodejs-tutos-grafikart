console.log('hoy')

//      @see    https://devdocs.io/node/fs#fspromiseswatchfilename-options

// ! Exemple de la doc KO
// // const { watch } = require('node:fs/promises')
// import { watch } from 'node:fs/promises'

// const ac          = new AbortController()
// const { signal }  = ac;

// setTimeout(() => ac.abort(), 10000)

// (async () => {
//   try {
//     const watcher = watch(__filename, { signal })
//     for await (const event of watcher)
//       console.log(event)
//   } catch (err) {
//     if (err.name === 'AbortError')
//       return
//     throw err
//   }
// })()

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
