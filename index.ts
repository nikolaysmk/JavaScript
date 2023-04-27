import express from 'express'
// import { markdownToJson } from 'markdown-to-json'

const markdownToJson = require('markdown-to-json')

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/file', (req, res) => {
  const filePath = __dirname + '/some.md'
  //   const data = markdownToJson.makeJson(filePath, function (json: any) {
  //     console.log(json)
  //     return json
  //   })
  const data = markdownToJson.makeJson(filePath)
  console.log(data)
  res.type('text/markdown')
  res.sendFile(filePath)
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
