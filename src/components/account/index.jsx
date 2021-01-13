import React from "react"
import "./index.css"
import Login from "../login/index"
import Registration from "../registration";

export default function Account() {

    return (
        <div className="form-container">
            {/*<Login/>*/}
            <Registration/>
        </div>
    )
}