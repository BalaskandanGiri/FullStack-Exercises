import axios from 'axios';
const baseUrl = 'https://floating-earth-43351.herokuapp.com/api/persons'

const getPhoneBook = () => {
    return axios.get(baseUrl);
}

const postPhoneNumber = (phone) => {
    return axios.post(baseUrl, phone);
}

const deletePhoneNumber = (id) => {
    return axios.delete(baseUrl+'/'+id);

}
const updatePhoneNumber = (id, phone) => {
    return axios.put(baseUrl+'/'+id, phone);
}

export default {getPhoneBook, postPhoneNumber, deletePhoneNumber, updatePhoneNumber};