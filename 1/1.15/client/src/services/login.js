import axios from 'axios'

const baseUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8000/login'

console.log('login.js baseUrl', baseUrl)

const login = async credentials => {

  var url = baseUrl + '/login'

  const response = await axios.post(url, credentials)
  
  return response.data
}

export default { login }