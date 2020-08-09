import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div className="main-header flex space-between">
            <div className="logo">
                <Link to="/dashboard"><img src="../dashboard/React August Logo.svg" alt="React August Logo" /></Link>
            </div>
            <div className="profile">Profile</div>
        </div>
    )
}

export default Header