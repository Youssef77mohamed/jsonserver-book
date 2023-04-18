import axios from "axios";

const BASE_URL = 'http://localhost:9000';

export const getAllBooks = () => {
    return axios.get(`${BASE_URL}/books`);
}

export const getBookById = (id) => {
    return axios.get(`${BASE_URL}/books/${id}`);
}

export const addBook = (book) => {
    return axios.post(`${BASE_URL}/books`, book);
}

export const deleteBook = (id) => {
    return axios.delete(`${BASE_URL}/books/${id}`);
}
export const putBook = (id,book) => {
    // console.log("put");
    // console.log(book,);
    // console.log(id);
    // console.log(BASE_URL);
    // console.log(book.id);
    return axios.put(`${BASE_URL}/books/${id}`,book);
}