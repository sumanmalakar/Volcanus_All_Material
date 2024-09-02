import express from "express";

const app = express();

// CRUD => Create (POST), Read (GET), Update (PUT), Delete (DELETE)

app.get("/",(req,res)=>{
    // res.send("You are")
    res.json({
        message:"Your request has been accepted",
        product:[
            {id:1,title:'Iphone 15',price:50000},
            {id:2,title:'Sony Xperia',price:65000},
            {id:3,title:'Galaxy Ultra',price:95000},
        ],
        hero:{
            name:'superman',
            age:50,
            gmail:'superman@gmail.com'

        }
    })
})

app.get("/superman", (req, res) => {
//   res.send("<h1>Your request has been accepted...!</h1>");
res.json({})
});

const port = 1000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
