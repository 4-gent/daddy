import React, { useState, useEffect} from 'react';
import '../styles/phonemain.css';
import Navigation from '../components/navbar'
import axios from 'axios';

export default function Mainscreen() {
    return(
        <div>
            <div className='phonemain-body'>
                <a href="/"><button className='logout-button'>Logout</button></a>

                <br />
                <br />

                <div className="phonemain-x">
                    <i>Speaker</i>
                    <b>Camera</b>
                    <div className="center-buttons">
                        <a href='/callphone'><button className="phone-call-btn">Phone Call</button></a>
                        <a href='/phone'><button className="text-msg-btn">Message</button></a>
                    </div>
                </div>
            </div>
        </div>
    )

}