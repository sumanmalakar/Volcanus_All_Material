import { Products } from "../Models/Products.js";

// add product
export const addProduct = async (req, res) => {
  const { title, description, price, qty, imgsrc, category } = req.body;

  try {
    let product = await Products.create({
      title,
      description,
      price,
      qty,
      imgsrc,
      category,
    });

    res.json({
      message: "Your Product has been Added",
      success: true,
      product,
    });
  } catch (error) {
    res.json({ message: error.message, success: false });
  }
};

// get All Products
export const getAllProducts = async (req, res) => {
  try {
    let product = await Products.find().sort({ createdAt: -1 });
    res.json({ message: "All Products ", product });
  } catch (error) {
    res.json({ message: error.message, success: false });
  }
};

// get product by id
export const getProductById = async (req, res) => {
  const id = req.params.id;
  let product = await Products.findById(id);
  res.json({ message: "Product by Id", product });
};

// update product by id
export const updateById = async (req, res) => {
  const id = req.params.id;
  let product = await Products.findByIdAndUpdate(id, req.body, { new: true });
  if (!product) return res.json({ message: "Invalid Id" });
  res.json({ message: "Your Product has been updated...!", product });
};


// delete product by id
export const deleteById = async (req, res) => {
  const id = req.params.id;
  let product = await Products.findByIdAndDelete(id);
  if (!product) return res.json({ message: "Invalid Id" });
  res.json({ message: "Your Product has been Deleted...!"});
};





// home
export const home = async (req, res) => {
  res.json({ message: "This is home " });
};
