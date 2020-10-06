import React, { useEffect, useRef } from 'react'
import './index.css'
import * as firebase from 'firebase'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export default function Expression ({ keyValue, expression: Expression, expression: { expression, date } }) {
  const title = useRef()

  useEffect(() => {
    title.current.style.color= `var(--color_${Math.floor(Math.random() * 5) +1})`
  }, [])

  const handleDelete = async () => {
    const expressions = await firebase.database().ref(`expressions`)
    const expressionsContent = await expressions.once('value')
    if (Object.keys(expressionsContent.val()).length > 1) {
      await firebase.database().ref(`expressions/${keyValue}`).remove()
    } else {
      await expressions.set(0)
    }
  }

  const defineDate = () => {
    const d = new Date(date)
    return `${d.getUTCDate()}/${d.getUTCMonth()}/${d.getUTCFullYear()} ${d.getUTCHours()}:${d.getUTCMinutes()}`
  }

  return (
    <li className="expression-container">
      <div className="title-container"><h2 ref={title} className="expression-title">{expression}</h2></div>
      <div className="context-container">
        <h5 className="date">{defineDate()}</h5>
        <button className="button" onClick={handleDelete}><FontAwesomeIcon icon={faTrash}/></button>
      </div>
    </li>
  )
}