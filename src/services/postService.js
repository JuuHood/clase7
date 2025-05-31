import axios from 'axios';

const API_URL = 'https://fakestoreapi.com/products';

export const getPosts = () => axios.get(API_URL);
export const getPost = (id) => axios.get(`${API_URL}/${id}`);
export const createPost = (data) => axios.post(API_URL, data);
export const updatePost = (id, postData) => axios.put(`${API_URL}/${id}`, postData);
export const deletePost = (id) => axios.delete(`${API_URL}/${id}`);
