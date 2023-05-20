import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import '../../App.css'

const Header = () => {
  return (
    <>
      <Navbar bg="dark" expand="lg" className='navs'>
      <Container>
      {/* <p className='busi'>Business Website</p> */}
        <div className='logos-set'>
          <img className='logos-set2' src='logos.jpg' />
        </div>
        <p>sss</p>
        <p>sss</p>
       
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            <Link className='nav-likns' to="/">Home</Link>
            <Link className='nav-likns' to="/about">About</Link>
            <Link className='nav-likns' to="/service">Service</Link>
            <Link className='nav-likns' to="/portfolio">Portfolio</Link>
            <Link className='nav-likns' to="/team">Team</Link>
            <Link className='nav-likns' to="/blog">Blog</Link>
            <Link className='nav-likns' to="/contact">Contact</Link>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    
    
    </>
  )
}

export default Header