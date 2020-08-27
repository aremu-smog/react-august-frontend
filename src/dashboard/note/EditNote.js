import React,{useState, useEffect} from 'react'
import Title from '../components/Title'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import {server} from '../constants'

const EditNote = () => {
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("")

    const [day, setDay] = useState()
    const [content, setContent] = useState()

    const [note, setNote] = useState({})

    let id = useParams().id
    useEffect(()=> {
        console.log(`Component ti mount bayi ${id}`)
        axios.get(`${server}/api/notes/${id}`)
        .then(res => {
           setNote(res.data) 
           setDay(note.day)
           setContent(note.content)
        })
        .catch(error => {
            console.log(error.message)
        })

    }, [id,note.day, note.content])

    const updateResource = (e) => {
        e.preventDefault()
        setLoading(true)
        setMessage("")

        const data = {
            "day": day,
            "content": content

        }
        axios.put(`${server}/api/notes/${id}`, data)
        .then(res => {
            setLoading(false)
            setMessage("Note updated successfully")
            console.log(res.data)
    
        })
        .catch(error => {
            setLoading(false)
            setMessage(error.message)
            // console.log(error)
        })
    }

    return(
        <div className="content-wrapper">
            <Title name="Edit Resource" link="dashboard"  />
            <div className="form-container">
            <h3>{message}</h3>
        <form onSubmit={updateResource}>
                <div className="form-group">
                    <label>Resource Name </label>
                    <input type="number" value={day}  required  onChange={(e) => setDay(e.target.value)} placeholder="e.g 1" />
                </div>

                <div className="form-group">
                    <label>Content</label>
                    <input type="text" required value={content} onChange={(e) => setContent(e.target.value)} placeholder = "e.g I was enjoying myself" />
                </div>


                <div className="form-group">
                    <input type="submit" value={loading ? "Hang on a sec...":"Update Note"} />
                </div>

            </form>
            </div>
        </div>
    )
}

export default EditNote