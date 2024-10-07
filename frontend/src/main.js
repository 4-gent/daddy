// Importing the React library
import React from 'react'
import './styles/main.css'
// Importing the Navigation component from the components/navbar file
import Carousel from 'react-bootstrap/carousel'
import 'bootstrap/dist/css/bootstrap.min.css'
import asian from './styles/scenes/asian.webp'
import black from './styles/scenes/black.webp'
import mexican from './styles/scenes/mexican.webp'
import logo from './styles/images/logo.png'
import remotedad from './styles/scenes/remotedad.webp'
import bbq from './styles/scenes/bbq.png'
import modelo from './styles/scenes/modelo.png'
import Fade from 'react-reveal/Fade'

import Alan from './styles/images/alan.jpg'
import Ethan from './styles/images/ethan.jfif'
import Mj from './styles/images/mj.jfif'
import Ram from './styles/images/tristan.jfif'

// Exporting the Main function as the default export
export default function Main() {
    // Returning the JSX to be rendered
    return (
        <div className='main-body'>
            <div className='d-flex flex-row justify-content-between'>
                <Carousel fade slide={false} controls={false} interval={3000} indicators={false}>
                    {[asian, black, mexican, remotedad, bbq, modelo].map((src, index) => (
                        <Carousel.Item key={index}>
                            <img className="carousel-img d-block" src={src} alt={`Slide ${index + 1}`} />
                        </Carousel.Item>
                    ))}
                </Carousel>
                <Fade top>
                    <div className='main-button-container d-flex flex-column align-items-center'>
                        <img className="main-logo" src={logo} alt="Logo" />
                        <a href='/login'><button className='main-button'>Login</button></a>
                        <a href='/register'><button className='main-button'>Register</button></a>
                    </div>
                </Fade>
            </div>
                <div className='mission-statement'>
                    <Fade top>
                        <h1 className='mission-header'>Mission Statement</h1>
                        <p className='mission-text'>"At Daddy’s Home, we’re dedicated to providing personalized mental health support for adolescents who have grown up without a father figure. Through an interactive visual novel format, we create a sincere AI father figure for an approachable and meaningful experience. As a whole, we believe in fostering a supportive, non-intimidating environment where users can connect with their AI dad, receive guidance, and feel empowered to navigate life's challenges."</p>
                        <p className='mission-text' style={{textAlign: 'right'}}> - Microsofties Team</p>
                    </Fade>
                </div>
            <div className='team-comp'>
                <Fade top>
                    <h1 className='team-header'>Our Team</h1>
                    <div className='team-card-container'>
                        <div className='team-card'>
                            <br />
                            
                            <img src={Ethan} className='team-image' />
                            <p className='team-name'>Ethan Ho</p>
                            <p className='team-sub'> San Jose State University </p>
                            <p className='team-sub'> Second year </p>
                        </div>
                        <div className='team-card'>
                            <br />
                            
                            <img src={Mj} className='team-image' />
                            <p className='team-name'>Marlon "Mj" Burog</p>
                            <p className='team-sub'> San Jose State University </p>
                            <p className='team-sub'> Fourth year </p>
                        </div>
                        <div className='team-card'>
                            <br />
                            
                            <img src={Alan} className='team-image' />
                            <p className='team-name'>Alan To</p>
                            <p className='team-sub'> San Jose State University </p>
                            <p className='team-sub'> Third year </p>
                        </div>
                        <div className='team-card'>
                            <br />
                            <img src={Ram} className='team-image' />
                            <p className='team-name'>Ram Tristan Lobo</p>
                            <p className='team-sub'> Sacramento State University </p>
                            <p className='team-sub'> Third year </p>
                        </div>
                    </div>
                    <br />
                    <br />
                    <h1 className='team-header'>"West Coast Best Coast!</h1>
                </Fade>
            </div>
        </div>
    )
}