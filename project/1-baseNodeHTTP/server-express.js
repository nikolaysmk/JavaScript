import Express from 'express'

const app = new Express()

app.get('*', (req, res) => {
  console.log(req.url)
  res.send(req.url)
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
