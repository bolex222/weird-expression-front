import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './index.css'
import Header from './components/header'
import Footer from './components/footer'
import Home from "./components/home";
import Account from "./components/account";
import * as firebase from "firebase";
import {firebaseConfig} from "./config/config";


function App() {
    const [firebaseLoaded, setFirebaseLoaded] = useState(false)
    useEffect(() => {
        firebase.initializeApp(firebaseConfig)
        setFirebaseLoaded(true)
    }, [])

    return (
        <div className="App">
            <Router>
                <Header/>
                <Route path="/" exact render={() => <Home firebaseLoaded={firebaseLoaded}/>}/>
                <Route path="/account" component={Account}/>
                <Footer/>
            </Router>
        </div>
    )
}

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
)


