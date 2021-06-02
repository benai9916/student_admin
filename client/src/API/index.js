import axios from 'axios';

// const API = axios.create({ baseURL: 'https://big-market-place.herokuapp.com/'})

const API = axios.create({ baseURL: 'http://localhost:5000/'})

export const fetchDetail = () => API.get('/addDetail');
export const addDetail = (newDetail) => API.post('/addDetail', newDetail);
export const updateDetail = (id, updateDetail ) =>  API.patch(`/addDetail/${id}`, updateDetail);
export const deleteDetail = (id) => API.delete(`/addDetail/${id}`);


export const signIn  = (formData) => API.post('/admin/signin', formData)
export const signUp  = (formData) => API.post('/admin/signup', formData)
