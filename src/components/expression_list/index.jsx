import React, { useEffect, useRef, useState } from 'react'
import Expression from '../expression'
import * as firebase from 'firebase'
import './index.css'

export default function ExpressionList ({ firebaseLoaded }) {
  const [expressions, setExpression] = useState({})

  const list = useRef()
  const listContainer = useRef()

  useEffect(() => {
    if (firebaseLoaded) {
      const ref = firebase.database().ref('expressions')
      ref.on('value', snapshot => {
        setExpression(snapshot.val())
        list.current.scrollTo(0, listContainer.current.scrllHeight)
      })
    }
  }, [firebaseLoaded, list])

  return (
    <div ref={listContainer} className="list-container">
      <ul ref={list} className="list">
      {Object.keys(expressions).map((KeyExpression) =>
        <Expression key={KeyExpression} keyValue={KeyExpression} expression={expressions[KeyExpression]}/>
      )}
      </ul>
    </div>
  )
}