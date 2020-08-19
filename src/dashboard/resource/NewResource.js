import React,{useState} from 'react'
import Title from '../components/Title'
import axios from 'axios'
import {server} from '../constants'

const NewResource = () => {
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("")

    const [resourceName, setResourceName] = useState()
    const [resourceLink, setResourceLink] = useState()

    const addResource = (e) => {
        e.preventDefault()
        setLoading(true)
        setMessage("")

        const data = new FormData()
        data.append("resource_name",resourceName)
        data.append("resource_link",resourceLink)
   
        axios.post(`${server}/api/resources`, data)
        .then(res => {
            setLoading(false)
            setMessage("Resource added successfully")
            // console.log(res.data)
            setResourceName("")
            setResourceLink("")
    
        })
        .catch(error => {
            setLoading(false)
            setMessage(error.message)
            // console.log(error)
        })
    }

    return(
        <div className="content-wrapper">
            <Title name="New Resource" link="dashboard"  />
            <div className="form-container">
            <h3>{message}</h3>
        <form onSubmit={addResource}>
                <div className="form-group">
                    <label>Resource Name </label>
                    <input type="text" value={resourceName}  required  onChange={(e) => setResourceName(e.target.value)} placeholder="e.g How to send multiple request with axios" />
                </div>

                <div className="form-group">
                    <label>Resource Link</label>
                    <input type="text" value={resourceLink} required  onChange={(e) => setResourceLink(e.target.value)} placeholder = "e.g https://www.storyblok.com/tp/how-to-send-multiple-requests-using-axios" />
                </div>

                <div className="form-group">
                    <input type="submit" value={loading ? "Hang on a sec...":"Create Resource"} />
                </div>

            </form>
            </div>
        </div>
    )
}

export default NewResource