import Product from "../models/Product.js";

export async function listProducts(req, res) {
  const items = await Product.find().sort({ createdAt: -1 });
  res.json(items);
}

export async function getProduct(req, res) {
  const item = await Product.findById(req.params.id);
  if (!item) return res.status(404).json({ message: "Not found" });
  res.json(item);
}

export async function createProduct(req, res) {
  const { title, category, design, price, images, description, stock } = req.body;

  if (!title || !category || !design || price == null || !images || images.length === 0) {
    return res.status(400).json({ message: "title, category, design, price, images required" });
  }

  const item = await Product.create({
    title,
    category,
    design,
    price: Number(price),
    images,
    description: description || "",
    stock: stock == null ? 10 : Number(stock)
  });

  res.status(201).json(item);
}

export async function updateProduct(req, res) {
  const { title, category, design, price, images, description, stock } = req.body;

  const item = await Product.findById(req.params.id);
  if (!item) return res.status(404).json({ message: "Not found" });

  if (title != null) item.title = title;
  if (category != null) item.category = category;
  if (design != null) item.design = design;
  if (price != null) item.price = Number(price);
  if (images != null) item.images = images;
  if (description != null) item.description = description;
  if (stock != null) item.stock = Number(stock);

  await item.save();
  res.json(item);
}

export async function deleteProduct(req, res) {
  const item = await Product.findById(req.params.id);
  if (!item) return res.status(404).json({ message: "Not found" });

  await Product.deleteOne({ _id: item._id });
  res.json({ message: "Deleted" });
}
