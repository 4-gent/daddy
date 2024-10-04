// Importing the React library
import React from 'react'
import './styles/main.css'
// Importing the Navigation component from the components/navbar file
import Navigation from './components/navbar'

// Exporting the Main function as the default export
export default function Main() {
    // Returning the JSX to be rendered
    return (
        <div className='main-body'>
            {/* Navigation bar section */}
            <nav>
                {/* Rendering the Navigation component */}
                <Navigation />
            </nav>
            {/* Main content section with flexbox layout */}
            <div className='main-container d-flex flex-row justify-content-center'>
                <div className='d-flex flex-column align-items-center'>
                    {/* Main heading */}
                    <h1>Welcome to Mj's Web Based Template "Copyrighted by Mj jus cuz"</h1>
                    <br />
                    {/* Description paragraph */}
                    <p>This is a template application to get you started, change it however you see fit.</p>
                </div>
            </div>
        </div>
    )
}