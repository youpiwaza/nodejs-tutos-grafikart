//      @see        https://devdocs.io/node/http
//      @see        https://devdocs.io/node/http#httpcreateserveroptions-requestlistener

import { createServer } from 'node:http'

// Create a local server to receive data from
const server = createServer()

// Listen to the request event
server.on('request', (request, res) => {
  // ! Envoi de JSON
  // * Type de contenu
  // res.writeHead(200, { 'Content-Type': 'application/json' })
  
  // * Clôturer la réponse de requête
  // res.end(JSON.stringify({
    //   data: 'Hello World!'
    // }))
    
    // ! Envoi de HTML
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
  res.end('Hello')
})

server.listen(8000)
