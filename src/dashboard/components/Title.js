import React from 'react'
import {Link} from 'react-router-dom'
const Title = ({name, link}) =>{
    return(
        <div>
            <Link to={"/"+link}><h1>{name}</h1></Link>
        </div>
    )
}

export default Title