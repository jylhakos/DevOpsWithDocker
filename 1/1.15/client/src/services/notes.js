import axios from 'axios'

const baseUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8000/notes'

console.log('notes.js baseUrl', baseUrl)

var token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAll = () => {
  
  var url = baseUrl + '/notes'

  console.log('notes.js getAll', url)
  
  const request = axios.get(url, { crossdomain: true })
  
  return request.then(response => response.data)
}

const create = async newObject => {

  const config = {
    headers: { Authorization: token },
    crossdomain: true
    }

  var url = baseUrl + '/notes'

  const response = await axios.post(url, newObject, config)

  return response.data
}

const update = (id, newObject) => {

  var url = baseUrl + '/notes'

  const request = axios.put(`${url}/${id}`, newObject, { crossdomain: true })

  return request.then(response => response.data)
}

export default { getAll, create, update, setToken }
