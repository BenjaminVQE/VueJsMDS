import axios from "axios";

const API_URL = import.meta.env.VITE_API_BASE_URL;

export const registerUser = async (email, password, lastName, firstName, company, phoneNumber) => {
  try {
    const response = await axios.post(`${API_URL}/users`, {
      email,
      password,
      lastName,
      firstName,
      company,
      phoneNumber,
    });
    return response.data;
  } catch (error) {
    console.error("Erreur API :", error);
    throw error;
  }
};
