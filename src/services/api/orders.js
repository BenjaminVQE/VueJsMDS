import axios from 'axios';

const API_URL = import.meta.env.VITE_API_BASE_URL;

export async function fetchProducts() {
  try {
    const response = await axios.get(`${API_URL}/orders`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Erreur API:', error.response?.data);
      throw new Error(error.response?.data?.message || 'Une erreur est survenue');
    } else {
      console.error('Erreur inconnue :', error);
      throw new Error('Erreur inattendue');
    }
  }
}
