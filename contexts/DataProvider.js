import React, { useEffect, useState } from 'react'
import Context from './Context'
import { fetchTodos } from '../helpers/apiCalls';


const DataProvider = (props) => {

  const [ user, setUser ] = useState() // here we store the signed up or logged in user
  const [ token, setToken ] = useState("") // here we store the token that allows us to do operations on the API
  const [ error, setError ] = useState("") // used to display errors from the API
  const [ todos, setTodos ] = useState([])

  useEffect(() => {

    // if user and token are available on load => fetch the todos of the user
    if(user && token && todos.length == 0) {
      fetchTodos(token)
      .then(todosApi => {
        console.log({ todosApi })
        setTodos(todosApi)
      })
    }

  }, [user, token, todos])



  // data that we wanna share with all screens / components in our App
  let sharedData = {
    user, setUser, token, setToken, todos, setTodos, error, setError
  }

  return (
    <Context.Provider value={ sharedData }>
      {props.children}
    </Context.Provider>

  )

}

export default DataProvider