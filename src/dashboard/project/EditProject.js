import React,{useState, useEffect} from 'react'
import Title from '../components/Title'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import {server} from '../constants'

const EditProject = () => {
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("")

    const [projectName, setProjectName] = useState()
    const [projectSlug, setProjectSlug] = useState()
    const [projectImage, setProjectImage] = useState(null)
    const [project, setProject] = useState({})

    let id = useParams().id
    useEffect(()=> {
        console.log(`Component ti mount bayi ${id}`)
        axios.get(`${server}/api/projects/${id}`)
        .then(res => {
           setProject(res.data) 
           setProjectName(project.name)
           setProjectSlug(project.slug)
        })
        .catch(error => {
            console.log(error.message)
        })

    }, [id,project.name, project.slug])

    const updateProject = (e) => {
        e.preventDefault()
        setLoading(true)
        setMessage("")

        // const data = new FormData()
        // data.append("project_name",projectName)
        // data.append("project_slug",projectSlug)

        const data = {
            "project_name": projectName,
            "project_slug": projectSlug

        }

        // if(projectImage != null){
        //     // data.append("project_image",projectImage,projectImage.name)
        //     // data.project
        // }
        
        axios.put(`${server}/api/projects/${id}`, data)
        .then(res => {
            setLoading(false)
            setMessage("Data uploaded successfully")
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
            <Title name="Edit Project" link="dashboard"  />
            <div className="form-container">
            <h3>{message}</h3>
        <form onSubmit={updateProject}>
                <div className="form-group">
                    <label>Project Name </label>
                    <input type="text" value={projectName}  required  onChange={(e) => setProjectName(e.target.value)} placeholder="e.g Countdown Timer" />
                </div>

                <div className="form-group">
                    <label>Project Slug</label>
                    <input type="text" required value={projectSlug} onChange={(e) => setProjectSlug(e.target.value)} placeholder = "e.g countdown-timer" />
                </div>

                <div className="form-group">
                    <label>Project Image</label>
                    <input type="file"  onChange ={(e) => setProjectImage(e.target.files[0])} />
                </div>

                <div className="form-group">
                    <input type="submit" value={loading ? "Hang on a sec...":"Update Project"} />
                </div>

            </form>
            </div>
        </div>
    )
}

export default EditProject