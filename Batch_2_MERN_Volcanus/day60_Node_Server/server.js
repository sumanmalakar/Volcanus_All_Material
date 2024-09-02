import http from "http";

const server = http.createServer((req, res) => {
  // console.log(req)
  if (req.url == "/") {
    
    // console.log("User is requesting for home route");
    res.end("Thank you for requesting")
  } else if (req.url == "/samosa") {
    // console.log("user is requesting for superman");
    res.end("5 minute me samosa deta hu")
  } else if (req.url == "/wdm") {
    // console.log("user is requesting for wdm");
    res.end("Youtube")
  }else{
    console.log("Invalide request")
  }
});

const port = 1000;

server.listen(port, () => console.log(`Server is running on port ${port}`));

// console.log(http)
