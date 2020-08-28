import React from 'react'

const Note = ({day, next, prev, content}) => {
    return(
        <div className="journal">
                    <div className="date">
                        <h3 className="month">August</h3>
                        <h1 className="day">{day}</h1>
                        <div className="footer">
                            <h3 className="year">2020</h3>
                            <div className="nav">
                            <img src="../landing/previous.svg" onClick={prev} className="prev" alt="Previous Day" />
                            <img src="../landing/next.svg" onClick={next} className="next" alt="Next Day" />
                            </div>
                            
                        </div>
                        
                    </div>
                    <div className="content">{content}</div>
                </div>
    )
}

export default Note