import React from 'react'
import Home from './Home'
import './landing.css'
import Story from './Story'
import {Route} from 'react-router-dom'
import Resources from './Resources'
import Journal from './Journal'

const Landing = () => {
    return(
        <div >
            <Route path="/" exact component={Home} />
            <Route path="/story" exact component={Story} />
            <Route path="/resources" exact component={Resources} />
            <Route path="/journal" exact component={Journal} />
        </div>
    )
}

export default Landing