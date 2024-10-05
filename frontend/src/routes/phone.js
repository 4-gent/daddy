// Importing React library
import React from 'react';
import '../styles/msg.css';

// Importing the Navigation component from the components/navbar file
import Navigation from '../components/navbar';

export default function Phone() {
    return (
        <div>
            <nav>
                <Navigation />
            </nav>
                <div className='msg-body'> 
                    <div class="iphone-x">
                        <i>Speaker</i>
                        <b>Camera</b>
                        <div className="input-container">
                            <input type="text" className="iphone-input" placeholder="Type a message..." />
                            <button className="send-btn">Send</button>
                        </div>
                    </div>
                </div>
        </div>
    );
}
