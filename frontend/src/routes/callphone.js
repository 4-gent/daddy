import React, { useState, useEffect} from 'react';
import '../styles/call.css';
import call from '../styles/images/calllogo.png';

import ClientComponent from "../components/humeClient";
import { fetchAccessToken } from "hume";


export default function Call() {

    const [accessToken, setAccessToken] = useState(null);

    async function getAccessToken() {
        const apiKey = String("YnOAL9RqfhCBaj46fKzCH63wN6uaEnp19GtpOT7JxKDupt2a");
        const secretKey = String("51QPGXSBQnjAPDRl3AGoWOjaRUoM54okpXAriFqxV3W6QuLA1OlFv8aKQIO6JX3S");
        console.log(apiKey);
        console.log(secretKey);
        try {
          const token = await fetchAccessToken({ apiKey, secretKey });
          return token;
        } catch (error) {
          console.error('Error getting access token:', error);
        }
    };

    useEffect(() => {
        try {
            getAccessToken().then((token) => {
              if (token) {
                setAccessToken(token);
                console.log('Access token:', token);
              }
            });
          } catch (error) {
            console.error('Error getting access token:', error);
          }
    }, []);

    return(
        <div>
            <div className='call-body'>
                <br />
                <br />
                <div className="callscreen-x">
                    <i>Speaker</i>
                    <b>Camera</b>
                    {/* Profile Picture */}
                    <div className="profile-container">
                        <img
                            src={call} // Example profile image
                            alt="Profile"
                            className="profile-pic"
                        />
                        <p className="caller-name">Dad</p>    
                        <p className="call-status">Ready to Call...</p>
                        {/* Call Control Buttons */}
                    <div className="call-buttons">
                        <ClientComponent accessToken={accessToken}/>
                    </div>
                    <a className='call-btn' href='/mainscreen'><button className='call-btn'>Leave</button></a>
                    </div>
                </div>
                <a href="/faceToFace"><button className='home-button'>Go Home</button></a>
            </div>
        </div>
    )

}