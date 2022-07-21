import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";

const createProduct = asyncHandler(async (req, res) => {
  const { name, price, quantity, category } = req.body;

  const productExist = await Product.findOne({ name });

  if (productExist) {
    res.status(401);
    throw new Error("Product Already exist");
  }

  const product = new Product({
    name,
    price,
    quantity,
    category,
  });

  const createdProduct = await product.save();

  res.status(201).json(createdProduct);
});

const getProducts = asyncHandler(async (req, res) => {

  const products = await Product.find({});

  res.status(200).json(products);
});

export { createProduct,getProducts };
