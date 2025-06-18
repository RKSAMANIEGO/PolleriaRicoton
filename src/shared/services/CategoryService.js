import { api } from "../../core/api/api";


export const getCategories = async () => {
  try {
    const response = await api.get('/categories');

    return response.data;
    
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
}