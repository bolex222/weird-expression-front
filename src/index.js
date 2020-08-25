import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as firebase from 'firebase'
import { firebaseConfig } from './config/config'

function App () {
  const [expressions, setExpression] = useState([])

  useEffect(() => {
    firebase.initializeApp(firebaseConfig)
    const ref = firebase.database().ref('expression')
    ref.on('value', snapshot => {
      setExpression(snapshot.val())
    })
  }, [])

  return (
    <>
      <h1>Welcome on Weird Expression</h1>
      {expressions.map((expression, index) => <div key={index}>{index} : {expression}</div>)}
    </>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
)


