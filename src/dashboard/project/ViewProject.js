import React from 'react'

const ViewProject = ({name}) =>{
    return(
        <div className="project_list space_between">
            <div class="text">{name}</div> 
            <img src="../../dashboard/edit_icon.svg" class="edit" alt="Edit Icon" />
            <img src="../../dashboard/edit_icon.svg" class="delete" alt="Delete Icon" />
        </div>
    )
}

export default ViewProject