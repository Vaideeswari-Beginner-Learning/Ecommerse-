// src/utils/cart.js

export const getCart = () => JSON.parse(localStorage.getItem("cart")) || [];

const saveCart = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
  window.dispatchEvent(new Event("cart:updated"));
};

export const addToCart = (product) => {
  const cart = getCart();
  const idx = cart.findIndex((x) => x.id === product.id);

  if (idx >= 0) {
    cart[idx].qty = (cart[idx].qty || 1) + 1;
  } else {
    cart.push({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.images?.[0] || product.image || "",
      qty: 1,
    });
  }

  saveCart(cart);
};

export const updateQty = (id, newQty) => {
  let cart = getCart();
  cart = cart
    .map((x) => (x.id === id ? { ...x, qty: newQty } : x))
    .filter((x) => (x.qty || 1) > 0); // qty 0 => remove
  saveCart(cart);
};

export const removeFromCart = (id) => {
  const cart = getCart().filter((x) => x.id !== id);
  saveCart(cart);
};

export const cartCount = () => {
  const cart = getCart();
  return cart.reduce((sum, x) => sum + (x.qty || 1), 0);
};

export const cartTotal = () => {
  const cart = getCart();
  return cart.reduce((sum, x) => sum + x.price * (x.qty || 1), 0);
};
