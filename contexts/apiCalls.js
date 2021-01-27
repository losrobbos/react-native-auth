
export const apiBaseUrl =  process.env.API_BASE_URL || 'https://todo-backend-rob.herokuapp.com' 

// perform a fetch calls against the API and return the data + log network errors
const doFetch = async (apiRoute, options ) => {
  try {
    let res = await fetch(apiBaseUrl + apiRoute, options)
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
  let data = await doFetch('/users/login', {
    method: "POST",
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ email, password })
  })
  return data
}

export const signup = async (email, password) => {
  let data = await doFetch('/users/login', {
    method: "POST",
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ email, password })
  })
  return data
}

// in order to ADD a todo, we need to be logged in and have a token
// we send along the token in the headers
export const addToDo = async (title, token) => {

  let todo = await doFetch('/todos', {
    method: "POST",
    headers: { 
      'Content-type': 'application/json',
      'Auth': token
    },
    body: JSON.stringify({ title })
  })
  return todo
}

export const fetchTodos = async (token) => {
  // in order to get data from API
  // => we provide the token we received after login in the header
  let todos = await doFetch('/users/me/todos', { headers: { 'Auth': token }} )
  return todos
}

