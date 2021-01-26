
export const apiBaseUrl =  process.env.API_BASE_URL || 'https://todo-backend-rob.herokuapp.com' 

const postFetch = async (apiRoute, data) => {
  try {
    let res = await fetch(apiBaseUrl + apiRoute, {
      method: "POST",
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(data)
    })
    return res.json()    
  }
  catch(err) {
    console.log({ err })
  }
}

const getFetch = async (apiRoute, options ) => {
  try {
    let res = await get(apiBaseUrl + apiRoute, options)
    return res.json()
  }
  catch(err) {
    console.log({ err } )
  }
}

// we expect to get data back in this format from API: 
// { user: <userInfo>, token: <token> }
// on error: { error: <some error message> }
export const login = async (email, password) => {
  let data = await postFetch('/users/login', { email, password })
  return data
}

export const signup = async (email, password) => {
  let data = await postFetch('/users', { email, password })
  return data
}

export const fetchTodos = async (token) => {
  let todos = await getFetch('/users/me/todos', { headers: { 'Auth': token }} )
  return todos
}
