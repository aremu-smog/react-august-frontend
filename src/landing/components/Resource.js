import React from 'react'


const Resource =({url, name})=>{
    return(
        <div className="link resource" ><a href={url} target="_blank" rel="noopener noreferrer">{name}<img src="../landing/link.svg" alt="external link" /></a></div>
    )
}


export default Resource