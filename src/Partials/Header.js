import React from 'react'

import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Offcanvas } from 'react-bootstrap';

export default function Header() {
  return (
    <>
    <Navbar key='md' expand='md'>
            <Container className='header--container'>
                <Navbar.Brand href="/"><img src="./images/rishilogo.svg" alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-md`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-md`}
                    placement="end"
                    className="activewhite"
                >
                    <Offcanvas.Header closeButton>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="nav-bar justify-content-center flex-grow-1 align-items-center pe-3">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/product">Product</Nav.Link>
                        </Nav>
                        <div className="contact--btn"> 
                            <Link><button type='submit'>Contact Us</button></Link>
                        </div>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    </>
  )
}
