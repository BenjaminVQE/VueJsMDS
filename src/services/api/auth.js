import axios from 'axios';

const API_URL = import.meta.env.VITE_API_BASE_URL;

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth`, { email, password });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Erreur API :', error.response?.data);
      throw new Error(error.response?.data?.message || 'Une erreur est survenue');
    } else {
      console.error('Erreur inconnue :', error);
      throw new Error('Erreur inattendue');
    }
  }
};
