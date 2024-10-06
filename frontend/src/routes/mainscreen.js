import React, { useState, useEffect} from 'react';
import '../styles/phonemain.css';
import Navigation from '../components/navbar'
import axios from 'axios';

export default function Mainscreen() {
    return(
        <div>
            <div className='phonemain-body'>
                <nav>
                    <Navigation /> {/* Rendering the Navigation component */}
                </nav>
                <div className="phonemain-x">
                    <i>Speaker</i>
                    <b>Camera</b>
                    <div className="center-buttons">
                        <button className="phone-call-btn">Phone Call</button>
                        <button className="text-msg-btn">Message</button>
                    </div>
                </div>
            </div>
        </div>
    )

}