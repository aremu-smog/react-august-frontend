import React, { useState, useEffect } from 'react'
import Heading from './components/Heading'
import Message from './components/Message'
import Resource from './components/Resource'
import axios from 'axios'
const Resources = () => {
    const [resources, setResources] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error,setError] = useState(false)
    const [errorMessage,setErrorMessage] = useState("")
    useEffect(()=>{
        setIsLoading(true)
        axios.get("https://react-august-api.herokuapp.com/api/resources")
        .then(res =>{
            setResources(res.data)
            setIsLoading(false)
            setError(false)
        })
        .catch(error =>{
            setError(true)
            setIsLoading(false)
            setErrorMessage(error.message)
        })
    }, [])
    const allResources = resources.map(resource => <Resource key={resource.id} name={resource.name} url={resource.link}  />)
    return(
        <div>
            <Heading solidText="Resources I used for" outlineText="React August" />
            <Heading solidText="List of Solutions  " outlineText="to problems encountered " reverse="reverse"/>
            <div className="container">
                <div className="inner">
                {isLoading === true ?<Message solidText="Duro Chere" outlineText="Wait Jira " />:""}
            {(error === false && isLoading === false) ? allResources: <Message solidText="Error wa o!" outlineText={errorMessage} />}
                    
                </div>
            </div>
        </div>
    )
}

export default Resources