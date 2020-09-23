import React, { useState, useEffect } from 'react'
import Heading from './components/Heading'
import Message from './components/Message'
import Note from './components/Note'
import axios from 'axios'
import Layout from './components/Layout'
import {server} from '../dashboard/constants'

const Journal = () => {
    const [notes, setNotes] = useState([])
    const [day, setDay] = useState(2)
    const [noOfDays, setNoOfDays] = useState(1)
    const [dayString, setDayString] = useState("01")
    const [content,setContent] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [error,setError] = useState(false)
    const [errorMessage,setErrorMessage] = useState("")

    useEffect(()=> {
        setIsLoading(true)
        axios.get(`${server}/api/notes`)
        .then(res => {
            setNotes(res.data)
            setContent(res.data[0].content)
            setNoOfDays(res.data.length);
            setIsLoading(false)
            setError(false)
        })
        .catch(error => {
            setErrorMessage(error.message)
            setIsLoading(false)
            setError(true)
        })
    },[])


    const formatDay =()=>{
        if(day > 9){
            setDayString(day)
        }else{
            setDayString(`0${day}`)
        }
        setContent( notes[day-1].content)
    }
   
    const prev = () => {
        if(day === 1){
            setDay(noOfDays)
        }else{
            setDay(day - 1)
        }
        formatDay()
    }

    const next = () => {
        if(day === noOfDays){
            setDay(1)
        }else{
            setDay(day + 1)
        }
        formatDay()
    }


    return(
        <div className="intro">
            <Layout>
            <Heading solidText="The Daily Gbas Gbos " outlineText="of React August" />
            <Heading solidText="The Winnings are not " outlineText="also left out" reverse="reverse" /> 
            <div className="container">
            {isLoading === true ?
            <Message solidText="Duro, Chere," outlineText="Wait, Jira " />:
            (error === false && isLoading === false) ? 
            <Note day={dayString} next={next} prev={prev} content={content}/>: <Message solidText="Error wa o!" outlineText={errorMessage} />}   
            </div>
            </Layout>
        </div>
    )
}

export default Journal