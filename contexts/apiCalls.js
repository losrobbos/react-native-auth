import config from '../.env'
import axios from 'axios'

// IMPORTANT! If you want to connect to an API that is running on your local PC, e.g. on Port 5000,
// you cannot (!) connect to it using http://localhost:5000. Because the app and the API run on DIFFERENT devices and they cannot reach each other via localhost
// in order to reach the host PC from the phone, you need the special address "http://10.0.2.2", 
// e.g. for connecting to an API running on Port 5000 you need to use "http://10.0.2.2:5000" here as API base URL 
const apiBaseUrl = config.API_BASE_URL || 'https://todo-backend-rob.herokuapp.com' 

console.log("API URL:", apiBaseUrl)

axios.defaults.baseURL = apiBaseUrl // set base URL for all our API requests

const extractApiError = (axiosErr) => {
  return axiosErr.response ? axiosErr.response.data : { error: "API not reachable" }
}

// we expect to get data back in this format from API: 
// { user: <userInfo>, token: <token> }
// on error: { error: <some error message> }
export const login = async (email, password) => {
  try {
    let res = await axios.post('/users/login', { email, password })
    return res.data
  }
  catch(axiosErr) { return extractApiError(axiosErr) }
}

export const signup = async (email, password) => {
  try {
    let res = await axios.post('/users', { email, password })
    return res.data
  }
  catch(axiosErr) { return extractApiError(axiosErr) }
}

// in order to ADD a todo, we need to be logged in and have a token
// we send along the token in the headers
export const addToDo = async (title, token) => {

  try {
    let res = await axios.post('/todos', { title }, { headers: { 'Auth': token } })
    return res.data
  }
  catch(axiosErr) { return extractApiError(axiosErr) }
    
}

export const fetchTodos = async (token) => {
  // in order to get data from API
  // => we provide the token we received after login in the header
  try {
    let res = await axios.get('/users/me/todos', { headers: { 'Auth': token }} )
    return res.data
  }
  catch(axiosErr) { return extractApiError(axiosErr) }
}

