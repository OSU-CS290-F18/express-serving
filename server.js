var express = require('express');
var app = express();

var logger = require('./logger');

app.use(function (req, res, next) {
  req.timestamp = new Date().toString();
  next();
});

app.use(logger);

//app.post();
app.get("/", function (req, res, next) {
  var content = "<html><body><h1>Our server is working! " + req.timestamp + "</h1></body></html>";
  res.status(200).send(content);
});

app.get("/cats", function (req, res, next) {
  var content = "<html><body><h1>Pretend you see cats here</h1></body></html>";
  res.status(200);
  // res.type("text/html");
  res.send(content);
});

app.get("/photos/:userId/:photoId", function (req, res, next) {
  console.log("== req.url:", req.url);
  console.log("== req.params:", req.params);
  res.send("<html><body><h1>Photo " + req.params.photoId + " by " + req.params.userId + "</h1></body></html>");
});

app.use(express.static('public'));

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
