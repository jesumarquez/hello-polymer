var express = require('express')
var app = express()

app.use(express.static(__dirname))

var server = app.listen(process.env.PORT, function () {

  var host = process.env.IP
  var port = process.env.PORT

  console.log('Example app listening at http://%s:%s', host, port)

})