const cart = {
  getCart() {
    const stored = localStorage.getItem('cart');
    return stored ? JSON.parse(stored) : [];
  },
  saveCart(cartItems) {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  },
  getQuantity(productId) {
    const cartItems = cart.getCart();
    const item = cartItems.find((i) => i.id === productId);
    return item ? item.quantity : 0;
  },
  addToCart(product) {
    const cartItems = this.getCart();
    const existing = cartItems.find((item) => item.id === product.id);
    if (existing) {
      existing.quantity = (existing.quantity || 1) + 1;
    } else {
      cartItems.push({ ...product, quantity: 1 });
    }
    this.saveCart(cartItems);
  },
  deleteCart() {
    localStorage.removeItem('cart');
  },
};

export default cart;
