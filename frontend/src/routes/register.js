import React, { useState } from 'react' // Import React and useState hook from 'react'
import axios from 'axios' // Import axios for making HTTP requests
import { NotificationManager, NotificationContainer } from 'react-notifications' // Import NotificationManager and NotificationContainer from 'react-notifications'
import 'react-notifications/lib/notifications.css' // Import CSS for notifications
import '../styles/register.css' // Import custom CSS for the registration component
import Navigation from '../components/navbar' // Import Navigation component

export default function Registration() { // Define and export the Registration component
    const [username, setUsername] = useState('') // Declare state variable for username with initial value ''
    const [password, setPassword] = useState('') // Declare state variable for password with initial value ''

    const handleRegistration = async(e) => { // Define an asynchronous function to handle registration
        e.preventDefault() // Prevent the default form submission behavior
        const data = { // Create a data object with username and password
            username: username, 
            password: password
        }
        try{
            if(username.trim().length === 0 || password.trim().length === 0){ // Check if username or password is empty
                NotificationManager.error('Please fill in all fields') // Show error notification if fields are empty
            }
            else{
                const response = await axios.post('http://localhost:4000/register', data) // Send POST request to the server with registration data
                if (response.status === 200) // Check if the response status is 200 (OK)
                    NotificationManager.success('Registration successful!') // Show success notification if registration is successful
                else
                    NotificationManager.error('Registration failed, please try again!') // Show error notification if registration failed
                    console.log('Login failed') // Log 'Login failed' to the console
            }
                
        } catch (e){ // Catch any errors that occur during the request
            if (e.response){
                if (e.response.status === 409) // Check if the response status is 409 (Conflict)
                    NotificationManager.error('User already exists!') // Show error notification if username already exists
                else
                    NotificationManager.error('An error occurred, please try again later!') // Show error notification if an error occurred
            } else if (e.request) {
                NotificationManager.error('Server error, please try again later!') // Show error notification if there is a server error
            } else {
                console.log(e) // Log the error to the console
                NotificationManager.error('An error occurred, please try again later!') // Show error notification if an error occurred
            }
        }

    }

    return( // Return the JSX to render the component
        <div className='register-body'> 
            <nav> 
                <Navigation /> {/* Render the Navigation component */}
            </nav>
            <div className='register-form d-flex flex-row justify-content-center'>
                <form onSubmit={handleRegistration} className='d-flex flex-column align-items-center'> {/* Attach handleRegistration function to form submission */}
                    <input className="register-input" required type='username' placeholder='Username' onChange={(e) => setUsername(e.target.value)} /> {/* Input field for username */}
                    <input className="register-input" required type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} /> {/* Input field for password */}
                    <button className="register-button" type='submit'>Register</button> {/* Submit button */}
                </form>
            </div>
            <NotificationContainer /> {/* Render the NotificationContainer for displaying notifications */}
        </div>
    )
}