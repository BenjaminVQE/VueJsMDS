export async function fetchProducts() {
  const response = await fetch(VITE_API_BASE_URL + '/articles')
  if (!response.ok) throw new Error('Erreur lors du chargement des produits')
  return await response.json()
}
