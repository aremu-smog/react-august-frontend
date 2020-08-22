import React from 'react'

const Heading = ({solidText,outlineText,reverse}) => {
    return(
        <div className={`scroll-text ${reverse}`}>
            <h1><span>{solidText}</span> <span className="outline"> {outlineText}</span></h1>
            <h1><span>{solidText}</span> <span className="outline"> {outlineText}</span></h1>
        </div>
    )
}

export default Heading