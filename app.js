const http = require('http');
const server = http.createServer((req, res) => {
  console.log("hello");
  res.end();
});

const port = 9000;
server.listen(port, () => {
  console.log(`server is listening on port ${port}...`);
});