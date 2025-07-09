const http = require("http");
const path = require("path");
const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  const requestFilePath = path.join(
    __dirname,
    req.url === "/" ? "index.html" : req.url
  );
  if (req.url === "/") {
    res.statusCode = "200";
    res.setHeader("content-type", "text-plain");
    res.end("hello ice tea");
  } else {
    res.statusCode = "404";
    res.setHeader("content-type", "text-plain");
    res.end("404: File not Found");
  }
});

server.listen(port, hostname, () => {
  console.log(`server listening at http://${hostname}:${port}\n`);
});
