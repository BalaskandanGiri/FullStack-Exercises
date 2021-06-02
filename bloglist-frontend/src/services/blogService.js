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

const create = async (body) => {
  const resp = await axios.post(baseUrl, body, {headers: {'Authorization': token, 'Content-Type': 'application/json'}} )
  return resp.data
}

export default { getAll, setToken, create }