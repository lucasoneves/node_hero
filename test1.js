const fs = require('fs');
const path = require('path');
const filePath = path.resolve(`./myFile.md`)

// Parse do buffer em string

const callBack = (data) => {
  return data.toString()
}

// Transforma a função em uma promise

const readFileAsync = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) return reject(err)
      return resolve(callBack(data))
    })
  })
}

(() => {
  readFileAsync(filePath)
    .then(console.log)
    .catch(console.error)
})()