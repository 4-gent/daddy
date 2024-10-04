// Importing React library
import React from 'react'

// Importing components from react-bootstrap library
import { Navbar, Container, Nav } from 'react-bootstrap'

// Importing Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'

// Importing custom CSS for the navbar
import '../styles/navbar.css'

// Defining and exporting the Navigation component
export default function Navigation() {
    return(
        // Wrapping the Navbar component in a div
        <div className=''>
            {/* Navbar component with properties for collapse, expand, background color, and variant */}
            <Navbar collapseOnSelect expand='lg' className="navbar">
                {/* Container component to make the Navbar fluid */}
                <Container fluid>
                    {/* Navbar.Brand component for the home link */}
                    <Navbar.Brand className='nav-text' href='/'>Home</Navbar.Brand>
                    {/* Navbar.Toggle component for the collapsible button */}
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' className='nav-toggle'  />
                    {/* Navbar.Collapse component to handle responsive behavior */}
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        {/* Nav component to align links to the right */}
                        <Nav className='ms-auto'>
                            {/* Nav.Link component for the login link */}
                            <Nav.Link className='nav-text' href='/login'>Login</Nav.Link>
                            {/* Nav.Link component for the register link */}
                            <Nav.Link className='nav-text' href='/register'>Register</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}