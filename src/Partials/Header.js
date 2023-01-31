import React from 'react'

import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
  return (
    <>
    <input type="checkbox" id="toggle"/>
    <Navbar key='md' expand='md'>
            <Container className='header--container'>
                <Navbar.Brand href="/"><img src="./images/rishilogo.svg" alt="" /></Navbar.Brand>
                <label class="navbar-toggler" for="toggle">
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                    </label>
                
                        <Nav className="nav-bar justify-content-center flex-grow-1 align-items-center pe-3">
                            <NavLink to="/" >Home</NavLink>
                            <NavLink to="/product">Product</NavLink>
                        </Nav>
                        <div className="contact--btn"> 
                        <HashLink to={"/#contact-us"} smooth><button type='submit'>Contact Us</button></HashLink>
                        </div>
                
            </Container>
        </Navbar>
    </>
  )
}
