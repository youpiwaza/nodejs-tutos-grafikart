//      @see    https://devdocs.io/node/fs#fscreatereadstreampath-options
//      @see    https://devdocs.io/node/fs#fscreatewritestreampath-options
//      @see    https://devdocs.io/node/webstreams#readablestreampipetodestination-options
import { createReadStream, createWriteStream } from 'node:fs'
import { stat } from 'node:fs/promises'

// Create a stream from some character device.
const stream = createReadStream('video.mp4')
const writeStream = createWriteStream('video-copie.mp4')
const {size} = await stat('video.mp4')

stream.pipe(writeStream)