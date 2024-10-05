// Importing the necessary whatevers
import React, { useState, useRef, useEffect } from 'react'
import '../styles/faceToFace.css'
import axios from 'axios'

// Exporting the Main function as the default export
export default function FaceToFace() {
    const [input, setInput] = useState('') // State for user input
    const [output, setOutput] = useState('') // State for AI output

    const handleInput = async(e) => {
        e.preventDefault()
        try{
            const response = await axios.post('http://localhost:4000/prompt', { input })
            console.log(response.data)
            setOutput(response.data)
        } catch (e){
            console.log(e)
        }
    }

    return (
        <div className='FaceToFace-body'>
            {/* Main content section with flexbox layout */}
            {/* Input section */}
            <form onSubmit={handleInput}>
                <div className='input-section d-flex flex-column align-items-center'>
                        <p className='name-display'>Daddy</p>
                        <br />
                        {/* <textarea className='ai-text-display whitespace-nowrap overflow-y-hidden'  */}
                            {/* placeholder='AI character will respond here...' readOnly>{output}</textarea> */}
                        <p>{output}</p>
                        <br />
                        <input type='text' placeholder='Type your message here...' className='user-input' onChange={(e) => setInput(e.target.value)}/>
                        <br />
                        <button type="submit" className='send-button'>Send</button>
                        <button className='leave-button'>Leave</button>
                </div>
            </form>
        </div>
    )
}
