var express = require('express');
var app = express();
const PORT = 3000;
app.get('/', function (req, res) {
res.send('Hola mundo desde el sena');
});
app.listen(3000, function () {
console.log(`Server running at port ${PORT}`);
});

// GET method route
app.get('/', function (req, res) {
    res.send('GET request to the homepage');
  });
  
  // POST method route
  app.post('/', function (req, res) {
    res.send('POST request to the homepage');
  });
