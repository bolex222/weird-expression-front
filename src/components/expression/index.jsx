import React from 'react'
import './index.css'

export default function Index ({ expression: {expression, date}}) {
  return (
    <div className="expression-container">
      <h4 className="expression-title">{expression}</h4>
      <span>{new Date(date).toString()}</span>
      <button>suprimer</button>
    </div>
  )
}