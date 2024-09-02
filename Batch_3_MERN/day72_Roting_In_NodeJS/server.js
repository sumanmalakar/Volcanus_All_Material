import http from "http";

const server = http.createServer((req, res) => {
  //   console.log(req.url);
  if (req.url == "/") {
    res.end("<h1>You are requesting for home routing</h1>");
  } else if (req.url == "/superman") {
    res.end("<h1>You are requesting for superman</h1>");
  } else if (req.url == "/yt") {
    res.end(
      "<h1>You are requesing for youtube, your request has been approved</h1>"
    );
  }else{
    res.end('404 not find')
  }
});

const port = 1000;

server.listen(port, () => console.log(`server is running on port ${port}`));
