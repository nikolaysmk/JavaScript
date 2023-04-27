// nodeJs 20, что нового
// install nvm install 20
// nvm use 20

// Path: nodejs.js
const fs = require('node:fs')
const a = fs.readFileSync('./test.txt', 'utf-8')
console.log(a)
// появилось ограничения на permission для доступа к иным файлам
// node --experimantal-permissions --alow-fs-read text.txt

// можно писать нативные тесты
// const assert = require('node:assert')
