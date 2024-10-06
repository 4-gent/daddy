import React, { useState } from 'react' // Import React and useState hook from 'react'
import axios from 'axios' // Import axios for making HTTP requests
import { NotificationManager, NotificationContainer } from 'react-notifications' // Import NotificationManager and NotificationContainer from 'react-notifications'
import 'react-notifications/lib/notifications.css' // Import CSS for notifications
import '../styles/register.css' // Import custom CSS for the registration component
import Navigation from '../components/navbar' // Import Navigation component

export default function Registration() { // Define and export the Registration component
    const [username, setUsername] = useState('') // Declare state variable for username with initial value ''
    const [password, setPassword] = useState('') // Declare state variable for password with initial value ''
    const [first, setFirstName] = useState('') // Declare state variable for first name with initial value ''
    const [last, setLastName] = useState('') // Declare state variable for last name with initial value ''
    const [email, setEmail] = useState('') // Declare state variable for email with initial value ''
    const [parent, setParent] = useState('') // Declare state variable for parent with initial value ''
    const [age, setAge] = useState('') // Declare state variable for age with initial value ''
    const [gender, setGender] = useState('')

    const handleRegistration = async(e) => { // Define an asynchronous function to handle registration
        e.preventDefault() // Prevent the default form submission behavior
        const data = { // Create a data object with username and password
            username: username, 
            password: password,
            firstname: first,
            lastname: last,
            email: email,
            parent: parent,
            gender: gender,
            age: age
        }
        try{
            if(username.trim().length === 0 || password.trim().length === 0 || first.trim().length === 0 || last.trim().length === 0 || email.trim().length === 0 || parent.trim().length === 0 || age.trim().length === 0){ // Check if username or password is empty
                NotificationManager.error('Please fill in all fields') // Show error notification if fields are empty
            }
            else{
                const response = await axios.post('http://localhost:4000/register', data) // Send POST request to the server with registration data
                if (response.status === 200){
                    NotificationManager.success('Registration successful!') // Show success notification if registration is successful
                    setTimeout(() => {
                        window.location.href = '/login' // Redirect to the login page after 3 seconds
                    }, 1500); // 3000 milliseconds = 3 seconds
                } // Check if the response status is 200 (OK)
                else{
                    NotificationManager.error('Registration failed, please try again!') // Show error notification if registration failed
                }
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
                    <input className="register-input" required type='text' placeholder='First Name' onChange={(e) => setFirstName(e.target.value)} /> {/* Input field for username */}
                    <input className="register-input" required type='text' placeholder='Last Name' onChange={(e) => setLastName(e.target.value)} /> {/* Input field for username */}
                    <input className="register-input" required type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} /> {/* Input field for username */}
                    <input className="register-input" required type='number' placeholder='How old are you? (I.E. 16)' onChange={(e) => setAge(e.target.value)} /> {/* Input field for username */}
                    <select className="register-input" required onChange={(e) => setParent(e.target.value)}>
                        <option value="" disabled selected>Choose Parent Profile</option>
                        <option value="asian">Asian Dad</option>
                        <option value="black">Black Dad</option>
                        <option value="mexican">Mexican Dad</option>
                    </select>
                    <select className="register-input" required onChange={(e) => setGender(e.target.value)}>
                        <option value="" disabled selected>What gender are you</option>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                        <option value="other">Other</option>
                    </select>
                    <button className="register-button" type='submit'>Register</button> {/* Submit button */}
                </form>
            </div>
            <NotificationContainer /> {/* Render the NotificationContainer for displaying notifications */}
        </div>
    )
}