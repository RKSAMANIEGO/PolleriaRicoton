import { api } from "../../core/api/api";


export const getCategories = async () => {
  try {
    const response = await api.get('/categories');

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return response.data;
    
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
}