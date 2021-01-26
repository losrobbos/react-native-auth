import React, { useEffect, useState } from 'react'
import Context from './Context'


const DataProvider = (props) => {

  const [ user, setUser ] = useState({ email: 'lala@web.de', password: 'heyyyy' })
  const [ todos, setTodos ] = useState([
    {title: "Trim the beard", status: "OPEN"},
    {title: "Wash the cat", status: "ACTIVE"},
    {title: "Code the API", status: "DONE"},
  ])

  let sharedData = {
    user, setUser, todos, setTodos 
  }

  return (
    <Context.Provider value={ sharedData }>
      {props.children}
    </Context.Provider>

  )

}

export default DataProvider