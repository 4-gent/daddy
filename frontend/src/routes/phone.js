// Importing React library
import React, { useState, useEffect } from 'react';
import '../styles/msg.css';
// Importing the Navigation component from the components/navbar file
import Navigation from '../components/navbar';
import axios from 'axios';

axios.defaults.withCredentials = true;

export default function Phone() {
    const [input, setInput] = useState('') // State for user input
    const [output, setOutput] = useState([]) // State for AI output
    const [owner, setOwner] = useState('')

    const handleInput = async(e) => {
        e.preventDefault()
        try{
            const response = await axios.post('http://localhost:4000/message', { input }, { withCredentials: true })
            console.log(response.data)
            if(response.status === 200)
                window.location.reload()
        } catch(error){
            console.error('Error message:', error.message)
        }
    }

    useEffect(() => {
        axios.get('http://localhost:4000/chat', { withCredentials: true })
            .then(response => {
                console.log(response.data);
                setOutput(response.data);
            })
            .catch(error => {
                console.error('Error message:', error.message);
            });
    }, []); // Run this effect only once when the component mounts


    return (
        <div>
            <nav>
                <Navigation />
            </nav>
                <div className='msg-body'> 
                    <div class="iphone-x">
                        <i>Speaker</i>
                        <b>Camera</b>
                        <p>
                            {output.map((item, index) => (
                                <div className="msg-container">
                                    <div className="msg">
                                        <p key={index}>{item.response}</p>
                                    </div>
                                </div>
                            ))}
                        </p>
                        <form onSubmit={handleInput}>
                            <div className="input-container">
                                <input type="text" className="iphone-input" placeholder="Type a message..." onChange={(e) => setInput(e.target.value)}/>
                                <button type="submit" className="send-btn">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
        </div>
    );
}
