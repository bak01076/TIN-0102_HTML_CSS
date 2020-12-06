import http from "http";
import fs from "fs";

const PORT = 6000;
const PATH =
  "/Users/yoonjongok/Desktop/학교/TIN(html,css,js)/tutorial/TIN-tutorial/lab7";
let watching = false;

const readFile = (filename) => {
  fs.readFile(filename, (err, data) => {
    if (err) throw err;
    console.log(data.toString());
  });
};

http
  .createServer((req, res) => {
    res.end("Waiting for requests...");
    fs.watch(PATH, (_, filename) => {
      if (watching) return;
      watching = true;

      try {
        readFile(filename);
      } catch (error) {
        res.writeHead(400, { "Content-Type": "text/plain" });
        res.end("Server error");
      }

      setTimeout(() => {
        watching = false;
      }, 1000);
    });
  })
  .listen(PORT);

console.log(`server is running on port:  http://localhost:${PORT}`);
