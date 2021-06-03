import axios from 'axios'
const baseUrl = 'http://localhost:3003/api/login'

const login = async(cred) => {
    const response = await axios.post(baseUrl, cred)
    return response.data
}

export default { login }