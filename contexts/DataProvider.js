import React, { useEffect, useState } from 'react'
import Context from './Context'


const DataProvider = (props) => {

  const [ user, setUser ] = useState()
  // const [ user, setUser ] = useState({ email: 'lala@web.de', password: 'heyyyy' })
  const [ token, setToken ] = useState("")
  const [ todos, setTodos ] = useState([
    {title: "Trim the beard", status: "OPEN"},
    {title: "Wash the cat", status: "ACTIVE"},
    {title: "Code the API", status: "DONE"},
  ])
  const [ error, setError ] = useState("")

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