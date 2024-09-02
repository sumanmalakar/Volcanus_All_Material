import express from "express";
import bodyParse from 'express'

const app = express();

app.use(bodyParse.json())


// CRUD
// C = Create = Post
// R = Read   = Get ✔
// U = Update = Put
// D = Delete = Delete

const product = [
  { id: 1, title: "I - phone 15", desc: "Best I phone now", price: 59600 },
  {
    id: 2,
    title: "Sony Xperia Z",
    desc: "Sony Phones are extremly well and good",
    price: 39600,
  },
  {
    id: 3,
    title: "Micromax",
    desc: "Micromax phone band ho gye",
    price: 79600,
  },
  {
    id: 4,
    title: "HTC Desire",
    desc: "One of the best phone brand",
    price: 29600,
  },
];

// Routing
app.get("/", (req, res) => {
  res.json({
    kuchhbi: "mai bhej rha hu kuchh bhi data",
    name: "ram",
    age: 20,
    salary: 20000,
    education: {
      UG: "IIT - B",
      12: "CBSE",
      10: "MPBSE",
    },
    message: "You are requested for the home route",
    success: true,
  });
});

app.get("/products", (req, res) => {
  res.json({
    message: "Your are requested for the product route",
    product,
    success: true,
  });
});

// add Product
app.post("/products/add",(req,res)=>{
  // console.log(req.body)
  product.push(req.body);
  res.json({message:'Your Product has been added successfully',product})

})


// get product by Id (dynamic routing)
app.get("/products/:id",(req,res)=>{
  // console.log(req.params.id)
  const id = req.params.id

  const productDetail = product.filter((data)=>data.id == id);

  res.json({meesage:"Dynamic route", productDetail})
})

// Delete Product by Id
app.delete("/products/:id",(req,res)=>{
  const id = req.params.id
  
  const newProduct = product.filter((data)=>data.id != id)

  res.json({message:'Your product has been deleted',newProduct})
})

// update product by Id
app.put('/products/update',(req,res)=>{
  const updatedProduct = req.body
    
  for(let i=0; i<product.length; i++){
    if(updatedProduct.id == product[i].id){
      product[i].title = updatedProduct.title;
      product[i].desc = updatedProduct.desc;
      product[i].price = updatedProduct.price
      break;
    }
  }

  res.json({message:'Your product has been updated',product, success:true})

})


const port = 1000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
