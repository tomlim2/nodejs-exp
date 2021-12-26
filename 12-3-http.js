const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Home page');
  }
  if (req.url === '/about') {
    for (let i = 0; i < 100; i++) {
      for (let j = 0; j < 100; j++) {
        console.log(`${i} ${j}`);
      }
    }
    res.end('About page');
  }
  res.end('No page');
});
server.listen(5000, () => {
  console.log('Server is listening on port 5000...');
});
