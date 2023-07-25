const path = require('node:path')

// Barra separadora de carpetas segun OS
console.log(path.sep)

const filePath = path.join('content', 'subfolder','test.txt')

const base = path.basename('tmp/BBH-secret-file/password.txt')
console.log(base)

const filename = path.basename('tmp/BBH-secret-file/password.txt', '.txt')
console.log(filename)

const extension = path.extname('my.super.jpg')
console.log(extension)