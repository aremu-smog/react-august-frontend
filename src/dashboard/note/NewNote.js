import React,{useState} from 'react'
import Title from '../components/Title'
import axios from 'axios'
import {server} from '../constants'

const NewNote = () => {
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("")

    const [day, setDay] = useState(1)
    const [content, setContent] = useState()

    const addNote = (e) => {
        e.preventDefault()
        setLoading(true)
        setMessage("")

        const data = new FormData()
        data.append("day",day)
        data.append("content",content)
   
        axios.post(`${server}/api/notes`, data)
        .then(res => {
            setLoading(false)
            setMessage("Note added successfully")
            // console.log(res.data)
            setDay(day+1)
            setContent("")
    
        })
        .catch(error => {
            setLoading(false)
            setMessage(error.message)
            // console.log(error)
        })
    }

    return(
        <div className="content-wrapper">
            <Title name="New Note" link="dashboard"  />
            <div className="form-container">
            <h3>{message}</h3>
        <form onSubmit={addNote}>
        <div className="form-group">
                    <label>Day </label>
                    <input type="number" value={day}  required  onChange={(e) => setDay(e.target.value)} placeholder="e.g 1" />
                </div>

                <div className="form-group">
                    <label>Content</label>
                    <input type="text" required value={content} onChange={(e) => setContent(e.target.value)} placeholder = "e.g I was enjoying myself" />
                </div>

                <div className="form-group">
                    <input type="submit" value={loading ? "Hang on a sec...":"Create Note"} />
                </div>

            </form>
            </div>
        </div>
    )
}

export default NewNote