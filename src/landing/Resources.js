import React, { useState, useEffect } from 'react'
import Heading from './components/Heading'
import Resource from './components/Resource'
import axios from 'axios'
const Resources = () => {
    const [resources, setResources] = useState([])
    useEffect(()=>{
        axios.get("https://react-august-api.herokuapp.com/api/resources")
        .then(res =>{
            setResources(res.data)
        })
        .catch(error =>{
            console.log(error.message)
        })
    }, [])
    const allResources = resources.map(resource => <Resource key={resource.id} name={resource.name} url={resource.link}  />)
    return(
        <div>
            <Heading solidText="Resources I used for" outlineText="React August" />
            <Heading solidText="List of Solutions  " outlineText="to problems encountered " reverse="reverse"/>
            <div className="container">
                <div className="inner">
                    {allResources}
                </div>
            </div>
        </div>
    )
}

export default Resources