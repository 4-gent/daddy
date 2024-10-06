// Importing the necessary whatevers
import React, { useState, useRef, useEffect } from 'react'
import '../styles/faceToFace.css'
import axios from 'axios'


import black from '../styles/scenes/black.webp'
import asian from '../styles/scenes/asian.webp'
import mexican from '../styles/scenes/mexican.webp'


axios.defaults.withCredentials = true;


const imageMapping = {
    'black': black,
    'asian': asian,
    'mexican': mexican
}


// Exporting the Main function as the default export
export default function FaceToFace() {
    const [input, setInput] = useState('') // State for user input
    const [output, setOutput] = useState('') // State for AI output
    const [image, setImage] = useState('') // State for background image

    const handleInput = async(e) => {
        e.preventDefault()
        try{
            const response = await axios.post('http://localhost:4000/prompt', { input }, { withCredentials: true })
            console.log(response.data)
            setOutput(response.data)
        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.error('Error response:', error.response);
                console.error('Error status:', error.response.status);
                console.error('Error data:', error.response.data);
            } else if (error.request) {
                // The request was made but no response was received
                console.error('Error request:', error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error('Error message:', error.message);
            }
        }
    }

    useEffect(() => {
        axios.get('http://localhost:4000/background', { withCredentials: true })
            .then((response) => {
                console.log(response.data)
                const imageUrl = imageMapping[response.data] || ''
                setImage(imageUrl)
            })
            .catch((error) => {
                console.error('Error message:', error.message)
            })
    }, [])

    return (
        <div className='FaceToFace-body' style={{ backgroundImage: `url(${image})` }}>
            {/* Input section */}
            <form onSubmit={handleInput}>
                <div className='input-section d-flex flex-column align-items-center'>
                    <p className='name-display'>Daddy</p>
                        <br />
                    <div> <p className='daddyOutput-container d-flex'> {output}</p> </div>
                        <br />
                    <input type='text' placeholder='Type your message here...' className='user-input' onChange={(e) => setInput(e.target.value)}/>
                        <br />
                    <button type="submit" className='send-button'>Send</button>
                </div>
            </form>
            <a href='/'><button className='leave-button'>Leave</button></a>
        </div>
    )
}
