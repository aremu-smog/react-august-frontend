import React from 'react'
import Heading from './components/Heading'
import Layout from './components/Layout'
const Home = () => {
    return(
        <div className="intro">
            <Layout>    
            <Heading solidText="I Knew React but" outlineText=" React didn't know me" />
            <Heading solidText="Everyday in August" outlineText=" 8:00PM - 9:00PM" reverse="reverse" />
            <Heading solidText="React didn't know me but" outlineText=" I knew React" />
            <Heading solidText="8:00PM - 9:00PM" outlineText=" Everyday in August" reverse="reverse" />
            </Layout>
        </div>
    )
}

export default Home