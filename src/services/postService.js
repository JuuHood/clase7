import axios from 'axios';
const API_URL = 'https://fakestoreapi.com/';

export const getPosts = () => axios.get(API_URL)
export const getPostsById = (id) => axios.get(`${API_URL}/${id}`);
export const createPost = (data) => axios.post(API_URL, data);
export const updatePost = async (id, postData) => {
  const response = await axios.put(`${API_URL}/products/${id}`, postData);
  return response.data;
};
export const deletePost = async (id) => {
  const response = await axios.delete(`${API_URL}/products/${id}`);
  return response.data;};