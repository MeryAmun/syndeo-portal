import axios from 'axios';
import authHeader from './authHeader';
const API_URL = 'http://localhost:8000/api/';

const getPosts = async () => {
    return await axios.get(API_URL + 'posts', {headers: authHeader()})
};

const getUserBoard = async () => {
    return await axios.get(API_URL + 'user', {headers: authHeader()})
};

const getAdmin = async () => {
    return await axios.get(API_URL + 'admin', { headers:authHeader()})
}

const userService = {
    getPosts,getUserBoard,getAdmin
}
export default userService