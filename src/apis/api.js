import axios from 'axios';

export const getToken = async () => {
    const response = await axios.get("http://localhost:8080/token");
    return response.data;
};

export const getTest = async () => {
    const response = await axios.get(`http://localhost:8080/test`);
    return response.data;
};

export const getTestById = async (id) => {
    const response = await axios.get(`http://localhost:8080/test/${id}`);
    return response.data;
};

export const insertTest = async (data) => {
    const response = await axios.post(`http://localhost:8080/test`,data);
    return response.data;
};

export const updateTest = async(data) => {
    const response = await axios.put(`http://localhost:8080/test/${data.id}`,data);
    return response.data;
};
