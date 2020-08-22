import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () =>{
    return(
        <div className="navigation">
            <div className="inner">
            <Link to="/"><div className="link">Home</div></Link>
            <Link to="/story"><div className="link">Story</div></Link>
            <Link to="/journal"><div className="link">Journal</div></Link>
            <Link to="/resources"><div className="link">Resources</div></Link>
            </div>
        </div>
    )
}

export default Nav