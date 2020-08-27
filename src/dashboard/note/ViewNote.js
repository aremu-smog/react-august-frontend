import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {server} from '../constants'

const deleteNote = (note_id) =>{
    // alert(project_id)
    axios.delete(`${server}/api/notes/${note_id}`)
    .then(res => {
        alert('Note Deleted')
    })
    .catch(error => {
        alert(error.message)
    })
}

const ViewNote = ({day,key}) =>{
    return(
        <div className="project_list space_between">
            <div className="text">Day {day}</div> 
            <Link to={`/dashboard/edit-note/${key}`}><img src="../../dashboard/edit_icon.svg" className="edit" alt="Edit Icon" /></Link>
            <img onClick={()=> deleteNote(key)} src="../../dashboard/delete_icon.svg" className="delete" alt="Delete Icon" />
        </div>
    )
}

export default ViewNote