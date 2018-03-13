var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
console.log("hai i am here")
app.use(express.static(__dirname));
console.log(__dirname)

app.listen(3000)