import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons'

const getPhoneBook = () => {
    return axios.get(baseUrl);
}

const postPhoneNumber = (phone) => {
    return axios.post(baseUrl, phone);
}

const deletePhoneNumber = (id) => {
    return axios.delete(baseUrl+'/'+id);
}

export default {getPhoneBook, postPhoneNumber, deletePhoneNumber};