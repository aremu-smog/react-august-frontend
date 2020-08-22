import React from 'react'
import Home from './Home'
import './landing.css'
import Nav from './components/Nav'
import Story from './Story'
import {Route} from 'react-router-dom'

const Landing = () => {
    return(
        <div className="landing">
            <Route path="/" exact component={Home} />
            <Route path="/story" component={Story} />
            <Nav />
        </div>
    )
}

export default Landing