import React from 'react'


const Resource =({url, name})=>{
    return(
        <div className="link resource" ><a href={url} target="_blank">{name}</a></div>
    )
}


export default Resource