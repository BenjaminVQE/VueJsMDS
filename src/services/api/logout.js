export function logoutUser() {
  localStorage.removeItem('token');
  localStorage.removeItem('userConnected');
  localStorage.removeItem('cart');
  window.location.href = '/login';
}
