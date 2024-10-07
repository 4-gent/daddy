// Importing necessary modules and components
import React, { useState } from 'react' // Importing React and useState hook
import axios from 'axios' // Importing axios for making HTTP requests
import { NotificationManager, NotificationContainer } from 'react-notifications' // Importing notification components
import 'react-notifications/lib/notifications.css' // Importing notification styles
import '../styles/login.css' // Importing custom styles for the login component
import Navigation from '../components/navbar' // Importing Navigation component
axios.defaults.withCredentials = true;

// Defining the Login component
export default function Login() {
    // Defining state variables for username and password
    const [username, setUsername] = useState('') // State for username
    const [password, setPassword] = useState('') // State for password

    // Function to handle login form submission
    const handleLogin = async(e) => {
        e.preventDefault() // Preventing default form submission behavior
        const data = {
            username: username, // Setting username in data object
            password: password // Setting password in data object
        }
        try{
            // Making a POST request to the login endpoint
            const response = await axios.post('http://localhost:4000/login', data, { withCredentials: true })
            NotificationManager.success('Login successful!') // Displaying success notification
            setTimeout(() => {
                window.location.href = '/mainscreen' // Redirecting to the main page after 3 seconds
            }, 1500) // 3000 milliseconds = 3 seconds
        } catch (e){
            if(e.response.status === 401){
                NotificationManager.error('Invalid credentials, please try again!') // Displaying error notification
            } else if (e.request) {
                NotificationManager.error('Server error, please try again later!') // Displaying error notification
            } else {
                console.log(e) // Logging any errors that occur during the request
                NotificationManager.error('An error occurred, please try again later!') // Displaying error notification
            }
            console.log(e) // Logging any errors that occur during the request
        }
    }

    // Returning the JSX for the Login component
    return(
        <div className='login-body'>
            <nav>
                <Navigation /> {/* Rendering the Navigation component */}
            </nav>
            <div className='login-form d-flex flex-row justify-content-center'>
                <form onSubmit={handleLogin} className='d-flex flex-column align-items-center'> {/* Form submission handled by handleLogin */}
                    <input className="login-input" required type='username' placeholder='Username' onChange={(e) => setUsername(e.target.value)} /> {/* Input for username */}
                    <input className="login-input" required type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} /> {/* Input for password */}
                    <button className="login-button" type='submit'>Login</button> {/* Submit button */}
                </form>
            </div>
            <NotificationContainer /> {/* Container for notifications */}
        </div>
    )
}