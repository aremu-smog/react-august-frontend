import React from 'react'
import {Route} from 'react-router-dom'
import NewProject from './NewProject'
import NewResource from './NewResource'
import Header from './components/Header'
import Home from './Home'
import './dashboard.css'
import '../fonts/Mogena.ttf'

const Dashboard = () => {
    return(
        <div>
            <Header />
            <Route path="/dashboard/new-project"  component={NewProject} />
            <Route path="/dashboard/new-resource"  component={NewResource} />
            <Route path="/dashboard" exact component={Home} />
          
            
           
        </div>
    )
}

export default Dashboard