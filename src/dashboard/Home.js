import React from 'react'
import Title from './components/Title'
import ViewProject from './project/ViewProject'
const Home = () => {
    return(
        <div className="content-wrapper">
            <Title name="Projects" link="dashboard/new-project" new_item={true} />
            <ViewProject key={10} name={"Dashboard"}/>
            <Title name="Resources" link="dashboard/new-resource" new_item={true} />
        </div>
    )
}

export default Home