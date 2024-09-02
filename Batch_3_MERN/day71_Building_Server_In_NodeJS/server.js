import http from 'http'

const server = http.createServer((req,res)=>{
    // console.log(req)
    // res.end("<h1>You are requesting for superman</h1>");
    const img = `<img src="https://cdn.pixabay.com/photo/2023/08/06/09/30/dahlia-8172522_640.jpg" />`;
    res.end(
      img
    );
})

const port = 1000;

server.listen(port,()=>console.log(`server is running on port ${port}`))
// console.log(server)

// console.log(http)