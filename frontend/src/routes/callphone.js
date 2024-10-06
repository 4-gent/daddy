import React, { useState, useEffect} from 'react';
import '../styles/call.css';
import Navigation from '../components/navbar'
import axios from 'axios';

export default function Call() {
    return(
        <div>
            <div className='call-body'>
                <nav>
                    <Navigation /> {/* Rendering the Navigation component */}
                </nav>
                <div className="callscreen-x">
                    <i>Speaker</i>
                    <b>Camera</b>
                    {/* Profile Picture */}
                    <div className="profile-container">
                        <img
                            src="https://via.placeholder.com/150" // Example profile image
                            alt="Profile"
                            className="profile-pic"
                        />
                        <p className="caller-name">Daddae</p>
                        <p className="call-status">Calling...</p>

                        {/* Call Control Buttons */}
                    <div className="call-buttons">
                        <button className="call-btn">Mute</button>
                        <button className="call-btn">Speaker</button>
                        <button className="call-btn end-call-btn">End Call</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )

}