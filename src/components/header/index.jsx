import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'

export default function Header () {

  return (
    <header className="header">
        <Link to="/">
            <h1 className="title"><span>Welcome on</span> <span>Weird Expressions</span></h1>
        </Link>
        <Link to="/account">
            <h5>connexion</h5>
        </Link>
    </header>
  )
}