var express = require('express')
  , fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var htmlBuffer = fs.readFileSync('./index.html');
  var htmlString = htmlBuffer.toString('utf-8', 0);
  response.send(htmlString);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});