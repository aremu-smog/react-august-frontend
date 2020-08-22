import React, { useState } from 'react'
import Heading from './components/Heading'

const Journal = () => {
    const [day, setDay] = useState(2)
    const [dayString, setDayString] = useState("01")
    const formatDay =()=>{
        if(day > 9){
            setDayString(day)
        }else{
            setDayString(`0${day}`)
        }
    }
    const prev = () => {
        if(day === 1){
            setDay(31)
        }else{
            setDay(day - 1)
        }
        formatDay()
    }

    const next = () => {
        if(day === 31){
            setDay(1)
        }else{
            setDay(day + 1)
        }
        formatDay()
    }

    return(
        <div>
            <Heading solidText="The Daily Gbas Gbos " outlineText="of React August" />
            <Heading solidText="The Winnings are not " outlineText="also left out" reverse="reverse" />

            <div className="container">
                <div className="journal">
                    <div className="date">
                        <h3 class="month">August</h3>
                        <h1 className="day">{dayString}</h1>
                        <div className="footer">
                            <h3 class="year">2020</h3>
                            <div className="nav">
                            <img src="../landing/previous.svg" onClick={prev} className="prev" alt="Previous Day" />
                            <img src="../landing/next.svg" onClick={next} className="next" alt="Next Day" />
                            </div>
                            
                        </div>
                        
                    </div>
                    <div className="content">
                    The project I had initially created that I was going to work with refused to work so I had to think in another direction so I thought how about I treat this like a proper project so I created a project on Github that can help me monitor things. Instead of building 10projects in React, the idea now is to couple everything together in one single robust project and instead of react in 10 projects, it’s now react-august
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Journal