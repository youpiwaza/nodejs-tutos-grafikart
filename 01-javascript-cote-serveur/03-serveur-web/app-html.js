//      @see        https://devdocs.io/node/http
//      @see        https://devdocs.io/node/http#httpcreateserveroptions-requestlistener

import { createReadStream } from 'node:fs'
import { createServer } from 'node:http'

// Create a local server to receive data from
const server = createServer()

// Listen to the request event
server.on('request', (req, res) => {

  // * Type de contenu HTML
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
  
  // ! On récupère d'abord le contenu du fichier, avant de le renvoyer
  const filePath = new URL('./_html5boilerplate-light/index.html', import.meta.url)
  const file = createReadStream(filePath)
  
  // ! On rajoute le contenu à la réponse
  // ! Attention le chargementde fichier prend du temps, fermer via event
  file.pipe(res, {end: false})

  
  
  // * Clôturer la réponse de requête
  // res.end(JSON.stringify({
    //   data: 'Hello World!'
    // }))
  
  file.on('end', () => {
    res.end()
  })
})

server.listen(8000)
