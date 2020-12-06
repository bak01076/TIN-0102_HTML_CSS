import http from "http";
import url from "url";

const PORT = 8000;

var server = http.createServer((req, res) => {
  const urlObj = url.parse(req.url, true);
  const firstNum = Number(urlObj.query.firstNum);
  const secondNum = Number(urlObj.query.secondNum);
  let result = 0;
  let operation = "";

  if (firstNum && secondNum) {
    if (urlObj.pathname === "/add") {
      result = firstNum + secondNum;
      operation = "addition";
    } else if (urlObj.pathname === "/sub") {
      result = firstNum - secondNum;
      operation = "subtraction";
    } else if (urlObj.pathname === "/mul") {
      result = firstNum * secondNum;
      operation = "muliply";
    } else if (urlObj.pathname === "/div") {
      result = firstNum / secondNum;
      operation = "division";
    } else {
      res.writeHead(400, { "Content-Type": "text/plain" });
      res.end(
        `Typed url is not a correct form. Please type the correct path \nexample url: http://localhost:${PORT}/add?firstNum=1&secondNum=2`
      );
    }
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(`The result of the ${operation} operation: ${result}`);
  } else {
    res.writeHead(400, { "Content-Type": "text/plain" });
    res.end(
      `Please type the mathematical operation(/add, /sub, /mul, /div) \nexample url: http://localhost:${PORT}/add?firstNum=1&secondNum=2`
    );
  }
});

server.listen(PORT, () =>
  console.log(`server is running on port:  http://localhost:${PORT}`)
);
