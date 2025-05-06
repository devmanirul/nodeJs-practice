//
import dateTime from "./dateTime.js";

import http from "http";

http
  .createServer((req, res) => {
    const path = req.url;
    req.writeHead(200, {
      "Content-Type": "text/html",
    });
    if (path === "/") {
      res.end("<h2>Server Homepage</h2>");
    } else if (path === "/about") {
      res.end("<h1>Server About Page</h1>");
    }
  })
  .listen(5000);
