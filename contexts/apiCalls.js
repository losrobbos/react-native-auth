import config from '../.env'
import axios from 'axios'
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
  catch(axiosErr) { extractApiError(axiosErr) }
}

export const signup = async (email, password) => {
  try {
    let res = await axios.post('/users/login', { email, password })
    return res.data
  }
  catch(axiosErr) { extractApiError(axiosErr) }
}

// in order to ADD a todo, we need to be logged in and have a token
// we send along the token in the headers
export const addToDo = async (title, token) => {

  try {
    let res = await axios.post('/todos', { title }, { headers: { 'Auth': token } })
    return res.data
  }
  catch(axiosErr) { extractApiError(axiosErr) }
    
}

export const fetchTodos = async (token) => {
  // in order to get data from API
  // => we provide the token we received after login in the header
  try {
    let res = await axios.get('/users/me/todos', { headers: { 'Auth': token }} )
    return res.data
  }
  catch(axiosErr) { extractApiError(axiosErr) }
}

