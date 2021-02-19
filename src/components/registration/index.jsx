import React, {useRef, useState} from "react";

export default function Registration() {

    // REFS
    const identifierEl = useRef()
    const passwordEl = useRef()
    const confirmPasswordEl = useRef()

    // STATES
    const [passwordsValid, setPasswordsValid] = useState(true)
    // const [errorMessagePassword, setErrorMessage]

    const onSubmit = e => {
        e.preventDefault()
        if (passwordEl.current.value !== confirmPasswordEl.current.value) {
            setPasswordsValid(false)
            passwordEl.current.value = confirmPasswordEl.current.value = ""
        } else {
            alert('TODO')
        }
    }

    return (
        <form className="form-connexion">
            <label htmlFor="identifier">identifiant</label>
            <input ref={identifierEl} id="identifier" className="form-input" type="text"/>
            <label htmlFor="password">mot de pass</label>
            <input ref={passwordEl} id="password" className="form-input" type="password"/>
            <label htmlFor="password">Confirmer le mot de pass</label>
            <input ref={confirmPasswordEl} id="password" className="form-input" type="password"/>
            <button className="form-input" type="submit" onClick={onSubmit}>connexion</button>
        </form>
    )
}