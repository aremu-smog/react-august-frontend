import React,{useState} from 'react'
import Title from '../components/Title'
import axios from 'axios'

const NewProject = () => {
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("")

    const [projectName, setProjectName] = useState()
    const [projectSlug, setProjectSlug] = useState()
    const [projectImage, setProjectImage] = useState(null)

    const addProject = (e) => {
        e.preventDefault()
        setLoading(true)
        setMessage("")

        const data = new FormData()
        data.append("project_name",projectName)
        data.append("project_slug",projectSlug)
        data.append("project_image",projectImage,projectImage.name)
        const server = "http://react-august-api.herokuapp.com/"
        // const server = "http://127.0.0.1:8000/"
        axios.post(server+"api/projects", data)
        .then(res => {
            setLoading(false)
            setMessage("Data uploaded successfully")
            // console.log(res.data)
    
        })
        .catch(error => {
            setLoading(false)
            setMessage(error.message)
            // console.log(error)
        })
    }

    return(
        <div className="content-wrapper">
            <Title name="New Project" link="dashboard"  />
            <div className="form-container">
            <h3>{message}</h3>
        <form onSubmit={addProject}>
                <div className="form-group">
                    <label>Project Name </label>
                    <input type="text"  required  onChange={(e) => setProjectName(e.target.value)} placeholder="e.g Countdown Timer" />
                </div>

                <div className="form-group">
                    <label>Project Slug</label>
                    <input type="text" required  onChange={(e) => setProjectSlug(e.target.value)} placeholder = "e.g countdown-timer" />
                </div>

                <div className="form-group">
                    <label>Project Image</label>
                    <input type="file"  onChange ={(e) => setProjectImage(e.target.files[0])} />
                </div>

                <div className="form-group">
                    <input type="submit" value={loading ? "Hang on a sec...":"Create Project"} />
                </div>

            </form>
            </div>
        </div>
    )
}

export default NewProject