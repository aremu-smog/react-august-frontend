import React from 'react'

const Message = ({solidText,outlineText}) => {
    return(
        <div className="message">
            <h2>{solidText}<span className="outline">{outlineText}</span></h2>
        </div>
    )
}

export default Message