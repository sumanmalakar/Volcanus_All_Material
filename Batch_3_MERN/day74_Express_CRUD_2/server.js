import express from "express";
import bodyParser from "express";
const app = express();

app.use(bodyParser.json());

let product = [
  { id: 1, title: "Iphone - 15", price: 75000 },
  { id: 2, title: "Oneplus 10", price: 35000 },
  { id: 3, title: "Sony Xperia", price: 85000 },
];

// C = create => post
// R = read => get
// U = update => put
// D = delete => delete

// get
app.get("/", (req, res) => {
  res.json({ message: "All Products", product });
});

// add product - post
app.post("/addproduct", (req, res) => {
  // console.log("this data is coming from body ", req.body);
  product.push(req.body);
  res.json({ message: "Your product has been added...!", product });
});

// update product - put
app.put("/:id", (req, res) => {
  // console.log(req.params.id)
  const id = req.params.id;
  const latestTitle = req.body.title;
  const latestPrice = req.body.price;

  for (let i = 0; i < product.length; i++) {
    if (id == product[i].id) {
      product[i].title = latestTitle;
      product[i].price = latestPrice;
      break;
    }
  }
  res.json({ message: "Your Product Has been Updated", product });
});

// delete product - delete
app.delete("/:id", (req, res) => {
  const id = req.params.id;
  product = product.filter((item) => item.id != id);
  res.json({ message: "your product has been deleted successfully", product });
});



const port = 1000;

app.listen(port, () => console.log(`server is running on port ${port}`));
