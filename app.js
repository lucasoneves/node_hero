const http = require('http');
const fs  = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    
    res.write(`
      <html>
        <head>
          <title>Enter Message</title>
          <body>
            <form action="/message" method="POST">
              <input type="text" name="message" />
              <button type="submit">Send</button>
            </form>
          </body>
        </head>
      </html>
    `)
    return res.end();
  }
  if (url === '/message' && method === 'POST') {
    fs.writeFileSync('message.txt', 'Dummy');
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }
  res.setHeader('Content-Type', 'text/html')
  res.write(`
      <html>
        <head>
          <title>Mi First page with Node</title>
          <body>
            <h1>Hello from node server</h1>
          </body>
        </head>
      </html>
    `)
    res.end();
});

server.listen(3000)