import React, { useEffect, useState } from 'react'
import Context from './Context'


const DataProvider = (props) => {

  const [ user, setUser ] = useState()
  // const [ user, setUser ] = useState({ email: 'lala@web.de', password: 'heyyyy' })
  const [ token, setToken ] = useState("")
  const [ error, setError ] = useState("")
  const [ todos, setTodos ] = useState([])

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