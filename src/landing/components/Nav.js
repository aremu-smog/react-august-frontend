import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () =>{
    return(
        <div className="navigation">
            <Link to="/"><div>The Story</div></Link>
            <Link to="/"><div>Read Journal</div></Link>
            <Link to="/"><div>View Projects</div></Link>
            <Link to="/"><div></div></Link>
        </div>
    )
}

export default Nav