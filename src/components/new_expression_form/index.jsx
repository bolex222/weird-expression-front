import React, { useEffect, useRef, useState } from 'react'
import * as firebase from 'firebase'
import './index.css'

export default function NewExpressionForm ( { firebaseLoaded }) {
  const [newExpression, setNewExpression] = useState('')
  const input = useRef(null)

  const focusInput = () => {
    input.current.focus()
  }

  useEffect(() => {
    input.current.focus()
    document.addEventListener('keydown', focusInput)

    return () => {
      document.removeEventListener('keydown', focusInput)
    }
  }, [])

  const handleSubmit = event => {
    event.preventDefault()
    if (!!newExpression.trim()) {
      firebase.database().ref('expressions').push({ expression: newExpression, date: Date.now(), user: 0 })
      setNewExpression('')
    }
  }

  return (
    <form>
      <input ref={input} name="new_expression" type="text" value={newExpression} onChange={e => {
        setNewExpression(e.target.value)
      }}/>
      <button onClick={handleSubmit} type="submit" disabled={!firebaseLoaded}>ajouter l'expression</button>
    </form>
  )
}