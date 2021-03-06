import React from 'react'
import Heading from './components/Heading'
import Layout from './components/Layout'

const Story = () => {
    return(
        <div className="intro">
            <Layout>
            <Heading solidText="This is the Story of" outlineText="React August" />
            <Heading solidText="Write ReactJS " outlineText="Every Single day " reverse="reverse"/>
            <div className="container">
                <div className="inner">
                    <p>
                    Every single day I wake up, the goal is the same: become a world class developer and enjoy life. 
                    But how do I do that if I am not working on the kind of projects I want
                    that will get me there/earn the kind of money I want. So all these days I thought I knew 
                    React and I thought I could build anything with it - I was earnestly waiting for that call - 
                    it came but I couldn’t work with the budget. What do I do? Keep waiting? Not SMOG DADDY - 
                    I decided to build a platform from scratch the way it would be done if I was working a 
                    team of developers (this I got to find out means microservices): this website in itself is one of them. I must not lie, it wasn’t easy 
                    because I realized even though I knew React, React didn’t know me that much, we 
                    are however getting to be lovers. <br/><br/><i>(Updated September 23, 2020 02:09AM )</i><br /><br />With love, <br/>Aremu Oluwagbamila (SMOG)
                    </p>
                </div>
            </div>
            </Layout>
        </div>
    )
}

export default Story