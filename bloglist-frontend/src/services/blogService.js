import axios from 'axios'
const baseUrl = 'http://localhost:3003/api/blogs'
let token = null;
const setToken = newtoken => {
  token = `bearer ${newtoken}`
}
const getAll = async () => {
  const request = await axios.get(baseUrl, {headers: {Authorization: token}})
  return request.data
}

export default { getAll, setToken }