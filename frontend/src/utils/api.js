import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5001',
});

export const authenticate = async (username, password) => {
  try {
    const response = await api.post('/users/authenticate', { username, password });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const register = async (username, email, password) => {
  try {
    const response = await api.post('/users/register', { username, email, password });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};