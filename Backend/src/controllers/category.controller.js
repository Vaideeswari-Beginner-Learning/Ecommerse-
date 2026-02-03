import Category from "../models/Category.js";

export const createCategory = async (req, res) => {
  const { name, slug } = req.body;
  const exists = await Category.findOne({ slug });
  if (exists) return res.status(400).json({ message: "Category slug already exists" });

  const category = await Category.create({ name, slug });
  res.json(category);
};

export const listCategories = async (req, res) => {
  const categories = await Category.find().sort({ createdAt: -1 });
  res.json(categories);
};
