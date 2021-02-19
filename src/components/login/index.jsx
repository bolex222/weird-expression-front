import React, {useRef} from "react"

export default function Login() {

    const identifier = useRef()
    const password = useRef()

    const onSubmit = e => {
        e.preventDefault()
        alert("TODO : add connexion system")
        identifier.current.value = ""
        password.current.value = ""
    }

    return (
      <div className="form-container">
        <form className="form-connexion">
          <label htmlFor="identifier">identifiant</label>
          <input ref={identifier} id="identifier" className="form-input" type="text"/>
          <label htmlFor="password">mot de pass</label>
          <input ref={password} id="password" className="form-input" type="password"/>
          <button className="form-input" type="submit" onClick={onSubmit}>connexion</button>
        </form>
      </div>
    )
}