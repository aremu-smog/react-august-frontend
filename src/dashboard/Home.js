import React,{useState, useEffect} from 'react'
import Title from './components/Title'
import ViewProject from './project/ViewProject'

import axios from 'axios'



const Home = () => {
    const [projects, setProjects] = useState([])

    useEffect(()=>{
        axios.get("http://react-august-api.herokuapp.com/api/projects")
        .then(res => {
            setProjects(res.data)
        })
        .catch(
            error => {
                console.log(error)
            }
        )
    }, [projects])

    return(
        <div className="content-wrapper">
            <Title name="Projects" link="dashboard/new-project" new_item={true} />
            {
                projects.map(project => <ViewProject key={project.id} project_id={project.id} project_name={project.name}/>)
            }
            <Title name="Resources" link="dashboard/new-resource" new_item={true} />
        </div>
    )
    
}



export default Home