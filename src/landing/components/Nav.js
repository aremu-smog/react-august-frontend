import React,{useState} from 'react'
import {Link} from 'react-router-dom'


const Nav = () =>{
    const [closed, setClosed] = useState(true)

    const toggleMenu = () => {
        setClosed(!closed)
    }
    
    return(
        <div className={closed ? "navigation":"navigation mobile-nav-open" }>
            <div className="menu-icon" onClick={()=> toggleMenu()}>{closed ? "Menu":"Close"}</div>
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