import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as firebase from 'firebase'
import { firebaseConfig } from './config/config'
import ExpressionList from './components/expression_list'
import Header from './components/header'
import Footer from './components/footer'
import NewExpressionForm from './components/new_expression_form'


function App () {
  const [firebaseLoaded, setFirebaseLoaded] = useState(false)
  useEffect(() => {
    firebase.initializeApp(firebaseConfig)
    setFirebaseLoaded(true)
  }, [])

  return (
    <div className="App">
      <Header/>
      <ExpressionList firebaseLoaded={firebaseLoaded}/>
      <NewExpressionForm firebaseLoaded={firebaseLoaded}/>
      <Footer/>
    </div>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
)


