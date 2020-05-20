const http = require("http");
const text2png = require("text2png");

const headersToText = req => JSON.stringify(req.headers, null, "  ");
const headersToImage = req =>
  text2png(headersToText(req), {
    font: "14px Futura",
    color: "teal",
    backgroundColor: "linen",
    lineSpacing: 10,
    padding: 20
  });

//create a server object:
http
  .createServer(function(req, res) {
    res.setHeader("Content-Type", "image/png");
    res.flushHeaders();
    res.write(headersToImage(req)); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
