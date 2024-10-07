import React, { useState, useEffect} from 'react';
import '../styles/msg.css';
import Navigation from '../components/navbar';
import axios from 'axios';

axios.defaults.withCredentials = true;

export default function Phone({ accessToken }) {
    const [input, setInput] = useState('') // State for user input
    const [output, setOutput] = useState([]) // State for AI output

    const handleInput = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/message', { input }, { withCredentials: true });
            console.log(response.data);
            if (response.status === 200) window.location.reload();
        } catch (error) {
            console.error('Error message:', error.message);
        }
    };

    useEffect(() => {
        axios.get('http://localhost:4000/chat', { withCredentials: true })
            .then((response) => {
                console.log(response.data);
                setOutput(response.data);
            })
            .catch((error) => {
                console.error('Error message:', error.message);
            });
    }, []); // Run this effect only once when the component mounts

    return (
        <div>
            <div className="msg-body">
                <a href="/mainscreen"><button className='logout-button'>Leave</button></a>
                <div className="iphone-x">
                    <i>Speaker</i>
                    <b>Camera</b>
                    {/* Scrollable messages container */}
                    <div className="msg-container">
                        {output.map((item, index) => (
                            <div key={index}>
                                {item.message && (
                                    <div className="msg">
                                        <p className="msg-text-user">{item.message}</p>
                                    </div>
                                )}
                                {item.response && (
                                    <div className="msg">
                                        <p className="msg-text">{item.response}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <form onSubmit={handleInput}>
                        <div className="input-container">
                            <input
                                type="text"
                                className="iphone-input"
                                placeholder="Type a message..."
                                onChange={(e) => setInput(e.target.value)}
                            />
                            <button type="submit" className="send-btn">Send</button>
                        </div>
                    </form>
                </div>
                <a href="/faceToFace"><button className='home-button'>Go Home</button></a>
            </div>
        </div>
    );
}
