var express = require('express');
var app = express();

//app.post();
app.get("/", function (req, res, next) {
  var content = "<html><body><h1>Our server is working!</h1></body></html>";
  res.status(200).send(content);
});

app.get("/cats", function (req, res, next) {
  var content = "<html><body><h1>Pretend you see cats here</h1></body></html>";
  res.status(200);
  // res.type("text/html");
  res.send(content);
});

app.get("*", function (req, res, next) {
  var content = "<html><body><h1>404!</h1><p>Requested URL: " + req.url + "</p></body></html>";
  res.status(404).send(content);
});

app.listen(8000, function (err) {
  if (err) {
    throw err;
  }
  console.log("== Server listening on port 8000");
});
