import React from 'react'
import Title from './components/Title'
import {Route, BrowserRouter as Router} from 'react-router-dom'
import NewProject from './NewProject'
import Home from './Home'
import NewResource from './NewResource'


const Dashboard = () => {
    return(
        <div>
    
            <Route path="/dashboard/new-project" component={NewProject} />
            <Route path="/dashboard/new-resource" component={NewResource} />
            <Route path="/dashboard/home" component={Home} />
          
            
           
        </div>
    )
}

export default Dashboard