const fs = require('fs')

var data = fs.readFile('./main.js', function (err, data) {
  if (err) throw err
  else {
    console.log('data is === ', data.toString())
  }
})
console.log('program ended', 123)
