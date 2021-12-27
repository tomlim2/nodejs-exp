const http = require('http');

const server = http.createServer((req, res) => {
  // console.log(req.method);
  const url = req.url;

  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.write('<h1>home page</h1>');
    res.end();
  }
  // about
  else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.write('<h1>about page</h1>');
    res.end();
  }
  // 404
  else {
    res.writeHead(404, { 'content-type': 'text/plain' });
    res.write('<h1>page not found</h1>');
    res.end();
  }
  // res.writeHead(200, { 'content-type': 'text/html' });
});

server.listen(5000, () => {
  console.log('Server is listening on port 5000...');
});
