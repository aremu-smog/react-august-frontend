import React,{useState, useEffect} from 'react'
import Title from './components/Title'
import ViewProject from './project/ViewProject'
import ViewResource from './resource/ViewResource'
import ViewNote from './note/ViewNote'
import {server} from "./constants"
import axios from 'axios'



const Home = () => {
    const [projects, setProjects] = useState([])
    const [resources, setResources] = useState([])
    const [notes, setNotes] = useState([])

    const projectRequest = axios.get(`${server}/api/projects`)
    const resourceRequest = axios.get(`${server}/api/resources`)
    const noteRequest = axios.get(`${server}/api/notes`)

    useEffect(()=>{
        axios.all([projectRequest, resourceRequest, noteRequest])
        .then(res => {
            setProjects(res[0].data)
            setResources(res[1].data)
            setNotes(res[2].data)
        })
        .catch(
            error => {
                console.log(error)
            }
        )
    }, [projectRequest, resourceRequest, noteRequest])

    return(
        <div className="content-wrapper">
            <Title name="Projects" link="dashboard/new-project" new_item={true} />
            {
                projects.map(project => <ViewProject key={project.id} project_id={project.id} project_name={project.name}/>)
            }
            <Title name="Resources" link="dashboard/new-resource" new_item={true} />
            {
                resources.map(resource => <ViewResource key={resource.id} project_id={resource.id} project_name={resource.name}/>)
            }
            <Title name="Journal" link="dashboard/new-note" new_item={true} />
            {
                notes.map(note => <ViewNote key={note.id}  day={note.day} />)
            }
        </div>
    )
    
}



export default Home