import React from 'react'
import Title from './components/Title'
const Home = () => {
    return(
        <div>
            <Title name="Projects" link="dashboard/new-project" />
            <Title name="Resources" link="dashboard/new-resource" />
        </div>
    )
}

export default Home