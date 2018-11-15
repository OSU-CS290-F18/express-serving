function logger(req, res, next) {
  console.log("== Received a request:", req.url, req.method, req.timestamp);
  next();
}

module.exports = logger;
