import axios from 'axios'
const baseUrl = 'http://localhost:3003/api/blogs'
let token = null;
const setToken = newtoken => {
  token = `bearer ${newtoken}`
}
const getAll = async () => {
  const request = await axios.get(baseUrl, {headers: {Authorization: token}})
  const body = request.data
  const data = body.sort((x,y) =>  y.likes - x.likes)
  console.log(body)
  console.log(data)
  return data
}

const create = async (body) => {
  const resp = await axios.post(baseUrl, body, {headers: {'Authorization': token, 'Content-Type': 'application/json'}} )
  return resp.data
}

const change = async (body) => {
  const resp = await axios.put(baseUrl + '/' + body.id, body, {headers: {'Authorization': token, 'Content-Type': 'application/json'}} )
  return resp.data
}

export default { getAll, setToken, create, change }