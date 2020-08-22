import React,{useState, useEffect} from 'react'
import Title from '../components/Title'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import {server} from '../constants'

const EditResource = () => {
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("")

    const [resourceName, setResourceName] = useState()
    const [resourceLink, setResourceLink] = useState()

    const [resource, setResource] = useState({})

    let id = useParams().id
    useEffect(()=> {
        console.log(`Component ti mount bayi ${id}`)
        axios.get(`${server}/api/resources/${id}`)
        .then(res => {
           setResource(res.data) 
           setResourceName(resource.name)
           setResourceLink(resource.link)
        })
        .catch(error => {
            console.log(error.message)
        })

    }, [id,resource.name, resource.link])

    const updateResource = (e) => {
        e.preventDefault()
        setLoading(true)
        setMessage("")

        const data = {
            "resource_name": resourceName,
            "resource_link": resourceLink

        }
        axios.put(`${server}/api/resources/${id}`, data)
        .then(res => {
            setLoading(false)
            setMessage("Resource updated successfully")
            console.log(res.data)
    
        })
        .catch(error => {
            setLoading(false)
            setMessage(error.message)
            // console.log(error)
        })
    }

    return(
        <div className="content-wrapper">
            <Title name="Edit Resource" link="dashboard"  />
            <div className="form-container">
            <h3>{message}</h3>
        <form onSubmit={updateResource}>
                <div className="form-group">
                    <label>Resource Name </label>
                    <input type="text" value={resourceName}  required  onChange={(e) => setResourceName(e.target.value)} placeholder="e.g Countdown Timer" />
                </div>

                <div className="form-group">
                    <label>Resource Link</label>
                    <input type="text" required value={resourceLink} onChange={(e) => setResourceLink(e.target.value)} placeholder = "e.g countdown-timer" />
                </div>


                <div className="form-group">
                    <input type="submit" value={loading ? "Hang on a sec...":"Update Resource"} />
                </div>

            </form>
            </div>
        </div>
    )
}

export default EditResource