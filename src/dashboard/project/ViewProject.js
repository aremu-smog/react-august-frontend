import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const deleteProject = (project_id) =>{
    // alert(project_id)
    axios.delete(`https://react-august-api.herokuapp.com/api/projects/${project_id}`)
    .then(res => {
        alert('Project Deleted')
    })
    .catch(error => {
        alert(error.message)
    })
}

const ViewProject = ({project_name,project_id}) =>{
    return(
        <div className="project_list space_between">
            <div className="text">{project_name}</div> 
            <Link to={`/dashboard/edit-project/${project_id}`}><img src="../../dashboard/edit_icon.svg" className="edit" alt="Edit Icon" /></Link>
            <img onClick={()=> deleteProject(project_id)} src="../../dashboard/delete_icon.svg" className="delete" alt="Delete Icon" />
        </div>
    )
}

export default ViewProject