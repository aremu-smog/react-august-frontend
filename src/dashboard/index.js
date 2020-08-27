import React from 'react'
import {Route} from 'react-router-dom'
import NewProject from './project/NewProject'
import NewResource from './resource/NewResource'
import EditResource from './resource/EditResource'

import Header from './components/Header'
import Home from './Home'
import './dashboard.css'
import '../fonts/Mogena.ttf'
import EditProject from './project/EditProject'
import EditNote from './note/EditNote'
import NewNote from './note/NewNote'

const Dashboard = () => {
    return(
        <div className="dashboard">
            <Header />
            <Route path="/dashboard/new-project"  component={NewProject} />
            <Route path="/dashboard/new-note"  component={NewNote} />
            <Route path="/dashboard/edit-project/:id"  component={EditProject} />
            <Route path="/dashboard/new-resource"  component={NewResource} />
            <Route path="/dashboard/edit-resource/:id"  component={EditResource} />
            <Route path="/dashboard/edit-note/:id" component={EditNote} />
            <Route path="/dashboard" exact component={Home} />
          
            
           
        </div>
    )
}

export default Dashboard