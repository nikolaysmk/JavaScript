import http from 'http'

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.write(req.url)
  console.log(req.url)
  res.end()
})

server.listen(3000, () => {
  console.log('Server is running on port 3000')
})

// Path: project/1-baseNodeHTTP/server-node.js
