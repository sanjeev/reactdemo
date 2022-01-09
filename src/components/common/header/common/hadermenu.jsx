import React, { Component } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from "../../../../assets/images/logo0.png";
export default class Hadermenu extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home"><img src={logo} alt="react-bootstrap" height="30"></img></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                               
                            </Nav>
                            <Nav>
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#aboutus">About Us</Nav.Link>
                                <Nav.Link href="#services">Services</Nav.Link>
                                <Nav.Link href="#products">Products</Nav.Link>
                                <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                                <Nav.Link href="#contact" className='getstarted'>Contact US</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        )
    }
}
