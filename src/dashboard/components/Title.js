import React from 'react'
import {Link} from 'react-router-dom'
const Title = ({name, link, new_item}) =>{
    return(
        <div className="title">
            <h1>
                {new_item !== true ? <Link to={"/"+link}><img src="../dashboard/Go Back.svg" alt={name} className="go-back" /></Link>:"" }
                {name} {new_item === true ? <Link to={"/"+link}><img src="../dashboard/New Icon.svg" alt={name} className="new-item" /></Link>:"" }</h1> 
        </div>
    )
}

export default Title