import http from "http";
import fs from "fs/promises";

http.createServer(async (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    let path = "./views/"
    switch (req.url) {
      case "/":
        path += "index.html";
        break;
      case "/about":
        path += "about.html";
        break;
      case "/contact-me":
        path += "contact-me.html";
        break;
      default:
        path += "404.html";
        res.statusCode = 404;
    }
    try {
      const data = await fs.readFile(path);
      res.write(data);
    } catch (err) {
      console.log(err);
    }
    res.end();
}).listen(8080);