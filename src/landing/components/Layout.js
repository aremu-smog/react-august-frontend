import React from 'react'
import Nav from './Nav'

const Layout = ({children}) => {
    return (
        <div className="landing">
            {children}
            <Nav />
        </div>
    )
}

export default Layout