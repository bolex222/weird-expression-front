import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as firebase from 'firebase'
import { firebaseConfig } from './config/config'
import Expression from './components/expression'


function App () {
  const [expressions, setExpressions] = useState([])
  const [newExpression, setNewExpression] = useState('')
  useEffect(() => {
    firebase.initializeApp(firebaseConfig)
    firebase.database().ref('expressions').on('value', snapshot => {
      setExpressions(snapshot.val())
    })
  }, [])

  const handleClick = e => {
    e.preventDefault()
    firebase.database().ref('expressions').push({ expression: newExpression, date: Date.now(), user: 0 })
    setNewExpression('')
  }

  return (
    <>
      <h1>Welcome on Weird Express ion</h1>
      {Object.values(expressions).map((expression, index) =>
        <Expression key={index} expression={expression}/>
        )}
      <form>
        <input name="new_expression" type="text" value={newExpression} onChange={e => {
          setNewExpression(e.target.value)
        }}/>
        <button onClick={handleClick} type="submit">ajouter l'expression</button>
      </form>
    </>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
)


