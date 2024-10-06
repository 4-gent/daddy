import React, { useState, useEffect} from 'react';
import '../styles/call.css';
import Navigation from '../components/navbar'
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
                <nav>
                    <Navigation /> {/* Rendering the Navigation component */}
                </nav>
                <ClientComponent accessToken={accessToken}/>
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