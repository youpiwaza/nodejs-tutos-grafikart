//      @see        https://devdocs.io/node/http
//      @see        https://devdocs.io/node/http#httpcreateserveroptions-requestlistener

import { createReadStream } from 'node:fs'
import { createServer } from 'node:http'

// Create a local server to receive data from
const server = createServer()

// Listen to the request event
server.on('request', (req, res) => {
  // ! Pour http://localhost:8000/?hey=hoy
  // Dans le terminal
  console.log('req.url :', req.url) // req.url : /?hey=hoy
  console.log('req.headers.accept : ', req.headers.accept)
  
  // On construit une URL
  //    Correspondance entre la requête & les fichiers à renvoyer depuis le serveur
  const subfolder = '_html5boilerplate-light'
  const url = new URL(subfolder + req.url, `http://${req.headers.host}`)
  console.log(url)
  // URL {
  //   pathname: '/_html5boilerplate-light/',
  //   search: '?hey=hoy',
  //   searchParams: URLSearchParams { 'hey' => 'hoy' },
  //   [...]
  // }

  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })

  // ! http://localhost:8000/?name=max
  //    @see    https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
  if(url.searchParams.has('name')){
    res.write(`Bonjour ${url.searchParams.get('name')}`)
    res.end()
  }
  // Page html classique
  else {
    const filePath = new URL('./_html5boilerplate-light/index.html', import.meta.url)
    const file = createReadStream(filePath)
    
    file.pipe(res, {end: false})
  
    file.on('end', () => {
      res.end()
    })
  }
})

server.listen(8000)
