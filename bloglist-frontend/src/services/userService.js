import axios from 'axios'
const baseUrl = 'http://localhost:3003/api/users'

const getUsers = async () => {
    const users = await axios.get(baseUrl)
    return users.data
}

export default { getUsers }
