const fs = require('fs')
const dns = require('dns')

const timestamp = () => performance.now().toFixed(2)

console.log('1 console.log')

// I/O
dns.lookup('www.google.com', (err, address, family) => {
  console.log('dns.lookup', address, family, timestamp())
})

setTimeout(() => {
  process.nextTick(() => console.log('nextTick in setTimeout', timestamp()))
  console.log('6 setTimeout', timestamp())
}, 0)
setImmediate(() => console.log('7 setImmediate', timestamp()))

new Promise((resolve, reject) => {
  console.log('2 Promise Constructor', timestamp())
  resolve()
})
  .then(() => {
    console.log('5 then resolve', timestamp())
  })
  .then(() => {
    console.log('5 then resolve', timestamp())
  })
  .finally(() => {
    console.log('5 then finally', timestamp())
  })

fs.writeFile('./test.txt', 'Hello node Js', () => {
  console.log('8 writeFile', timestamp())
})

// fs.writeFileSync('./test.txt', 'nodeJsWRiteSync', () => {
//   console.log('readFileSync', timestamp)
// })

setImmediate(() => console.log('7 setImmediate', timestamp()))

process.nextTick(() => console.log('4 nextTick', timestamp()))

// I/O
dns.lookup('www.google.com', (err, address, family) => {
  console.log('dns.lookup', address, family, timestamp())
})

setImmediate(() => console.log('7 setImmediate', timestamp()))

console.log('3 console.log', timestamp())
