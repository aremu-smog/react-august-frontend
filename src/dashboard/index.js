import React from 'react'
import {Route} from 'react-router-dom'
import NewProject from './project/NewProject'
import NewResource from './NewResource'
import Header from './components/Header'
import Home from './Home'
import './dashboard.css'
import '../fonts/Mogena.ttf'
import EditProject from './project/EditProject'

const Dashboard = () => {
    return(
        <div>
            <Header />
            <Route path="/dashboard/new-project"  component={NewProject} />
            <Route path="/dashboard/new-resource"  component={NewResource} />
            <Route path="/dashboard/edit-project/:id"  component={EditProject}/>
            <Route path="/dashboard" exact component={Home} />
          
            
           
        </div>
    )
}

export default Dashboard