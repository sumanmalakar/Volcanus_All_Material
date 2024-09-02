import http from 'http'

const server = http.createServer((req,res)=>{
    // console.log(req.url)
    if(req.url == "/"){
        res.end("You are request for home route")
    }else if(req.url == "/samosa"){
        res.end("We dont have samosa right now")
    }else if(req.url == "/coldrink"){
        res.end("You have to pay 100 for that")
    }else if(req.url == "/profile"){
        res.end("Welcome User")
    }else{
        res.end("404 not found")
    }
    
});

const port = 1000;

server.listen(port,()=>console.log(`Server is running on port ${port}`))

// console.log(http)