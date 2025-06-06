import axios from 'axios';

const API_URL = import.meta.env.VITE_API_BASE_URL;

export async function getUserConnected() {
  try {
    const response = await axios.get(`${API_URL}/me`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération de l’utilisateur connecté:', error);
    throw error;
  }
}
