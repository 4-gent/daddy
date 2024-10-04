// Importing the React library
import React from 'react'
import './styles/main.css'
// Importing the Navigation component from the components/navbar file
import Carousel from 'react-bootstrap/carousel'
import 'bootstrap/dist/css/bootstrap.min.css'
import asian from './styles/asian.webp'
import black from './styles/black.webp'
import mexican from './styles/mexican.webp'
import logo from './styles/logo.png'

// Exporting the Main function as the default export
export default function Main() {
    // Returning the JSX to be rendered
    return (
        <div className='main-body'>
            <div className='d-flex flex-row justify-content-between'>
                <Carousel fade={true} controls={false} interval={3000} indicators={false}>
                    <Carousel.Item>
                        <img
                            className="carousel-img d-block"
                            src={asian}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="carousel-img d-block"
                            src={black}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="carousel-img d-block"
                            src={mexican}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
                <div className='main-button-container d-flex flex-column align-items-center'>
                    {/* <h1 className='main-title'>Daddy's Home</h1> */}
                    <img className="main-logo" src={logo} />
                    <a href='/login'><button className='main-button'>Login</button></a>
                    <a href='/register'><button className='main-button'>Register</button></a>
                </div>
            </div>
        </div>
    )
}