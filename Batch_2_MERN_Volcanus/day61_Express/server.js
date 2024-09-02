import express from "express";

const app = express();

// CRUD => Create Read Update Delete
// C => Create => POST
// R => Read => GET { U can access from browser as well }
// U => Update => PUT
// D => Delete => DELETE

const products = [
  { id: 1, title: "I phone 16", price: "120000" },
  { id: 2, title: "One plus", price: "30000" },
  { id: 3, title: "Google pixels", price: "90000" },
  { id: 4, title: "MI 6", price: "50000" },
];

app.get("/", (req, res) => {
  res.json({ message: "Geting all Products ", products });
});

app.post("/add", (req, res) => {
  const product = { id: Math.random(), title: "Sony Xperia", price: "65000" };
  products.push(product);
  res.json({ message: "Your product has been added..!", products });
});

app.put("/:id", (req, res) => {
  const prouductId = req.params.id;
  const updatedData = { title: "New gen phone", price: "3000" };
  let i;
  for (i = 0; i < products.length; i++) {
    if (prouductId == products[i].id) {
      (products[i].title = updatedData.title),
        (products[i].price = updatedData.price);
      i = 0;
      break;
    }
  }
  if (i == products.length) return res.json({ message: "Invalid id" });
  res.json({ message: "Your product has been updated ", products });
});

app.delete("/:id", (req, res) => {
  const id = req.params.id;

  let newProducts = products.filter((data) => data.id != id);
  res.json({ superman: "Your product has been deleted", newProducts });
});

const port = 2000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
