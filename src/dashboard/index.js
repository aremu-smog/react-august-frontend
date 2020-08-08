import React from 'react'
import {Route} from 'react-router-dom'
import NewProject from './NewProject'
import Home from './Home'


const Dashboard = () => {
    return(
        <div>
    
            <Route path="/dashboard/new-project" component={NewProject} />
            <Route path="/dashboard/new-resource" component={New} />
            <Route path="/dashboard/home" component={Home} />
          
            
           
        </div>
    )
}

export default Dashboard