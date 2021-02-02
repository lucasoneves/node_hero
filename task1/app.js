const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  const url = req.url;

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  if (url === "/") {
    res.write(`
      <html>
        <head>
          <title>Cadastro de usuário</title>
          <body>
            <form action="/create-user" method="POST">
              <input type="text" name="create-user" />
              <button type="submit">Send</button>
            </form>
          </body>
        </head>
      </html>
    `);
    return res.end();
  } else if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFileSync("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
    res.write(`
    <html>
        <head>
          <title>dummy users</title>
          <body>
            <ul>
              <li>Lucas</li>
              <li>Camila</li>
              <li>Catarina</li>
            </ul>
          </body>
        </head>
      </html>`);
  } else if (url === "/users") {
    res.write(`
    <html>
        <head>
          <title>dummy users</title>
          <body>
            <ul>
              <li>Lucas</li>
              <li>Camila</li>
              <li>Catarina</li>
            </ul>
          </body>
        </head>
      </html>`);
  }
  return res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
