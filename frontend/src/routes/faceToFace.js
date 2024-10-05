// Importing the necessary whatevers
import React, { useState, useRef, useEffect } from 'react'
import '../styles/faceToFace.css'
// Importing the Navigation component from the components/navbar file
import Navigation from '../components/navbar'
import axios from 'axios'

// Exporting the Main function as the default export
export default function FaceToFace() {
    
    // Returning the JSX to be rendered
    return (
        <div className='FaceToFace-body'>
            {/* Navigation bar section */}
            <nav>
                {/* Rendering the Navigation component */}
                <Navigation />
            </nav>
            {/* Main content section with flexbox layout */}
            {/* Input section */}
            <div className='input-section d-flex flex-column align-items-center'>
            {/* Name box */}
            <textarea className='name-display whitespace-nowrap scroll-y-hidden ' 
                placeholder = "Daddy" readOnly></textarea>
            <br />
            {/* AI character text display box */}
            <textarea className='ai-text-display whitespace-nowrap overflow-y-hidden' 
                placeholder ='AI character will respond here...'></textarea>
            <br />
            {/* User input text box */}
            <input type='text' placeholder='Type your message here...' className='user-input' />
            <br />
            {/* Send button */}
            <button className='send-button'>Send</button>
            {/* Leave button */}
            <button className='leave-button'>Leave</button>
            </div>        
                    
        </div>
         
    )
}
