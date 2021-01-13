import React from "react"

export default function Input({type, children, error, getContent}) {

    const inputEl =

    getContent()

    return (
        <>
            <label htmlFor="input">{children}</label>
            <input id="input" type={type}/>
            {error? <span>{error}</span> : ""}
        </>
    )
}