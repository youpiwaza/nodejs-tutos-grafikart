//      @see    https://devdocs.io/node/fs#fscreatereadstreampath-options
import { createReadStream } from 'node:fs'
import { stat } from 'node:fs/promises'

// Create a stream from some character device.
const stream = createReadStream('video.mp4')
const {size} = await stat('video.mp4')

let chargementTotal = 0;

stream.on('data', (chunk) => {
  // console.log(chunk)
  // console.log(chunk.length)
  chargementTotal += chunk.length;

  console.log(`Chargement : ${ chargementTotal / size * 100 } / 100`)
})
stream.on('close', () => {
  console.log('close')

  // Forcer clôture du stream à la fin, cf. ci-dessous
  stream.push(null)
  stream.read(0)
})

// Doc v
setTimeout(() => {
  stream.close() // This may not close the stream.
  // Artificially marking end-of-stream, as if the underlying resource had
  // indicated end-of-file by itself, allows the stream to close.
  // This does not cancel pending read operations, and if there is such an
  // operation, the process may still not be able to exit successfully
  // until it finishes.
  stream.push(null)
  stream.read(0)
}, 3000)
