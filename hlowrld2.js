var express = require('express')
var path = require('path')
var app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
console.log("hai i am here")
app.use(express.static(__dirname));
app.use('/Angular',express.static(path.join(__dirname,'Angular')))
console.log(__dirname)

app.listen(3000)