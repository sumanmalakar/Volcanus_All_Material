import express from "express";

const app = express();
app.use(express.urlencoded({ extended: true }));

let user = [];

app.get('/',(req,res)=>{
    res.render('./register.ejs')
})

app.post('/register',(req,res)=>{

    const {name,email,password} = req.body;
    user.push({ name, email, password });

    res.redirect('/login')

})

app.get('/login',(req,res)=>{
    res.render('./login.ejs')
})

app.post('/login',(req,res)=>{
    const {password,email} = req.body;

    for(let i=0; i<user.length; i++){
        if(user[i].password == password && user[i].email == email){
            res.redirect('/user')
        }else{
            res.redirect('/error')
        }
    }

})

app.get('/user',(req,res)=>{
    res.render('./user.ejs')
})

app.get('/error',(req,res)=>{
    res.send("error")
})


app.listen(1000, () => console.log(`Server is running on port 1000`));
