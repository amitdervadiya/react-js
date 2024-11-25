import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

function Header() {
    return (
        <Navbar expand="lg" className="bg-black">
            <Container>
                <Navbar.Brand as={NavLink} to="/" className="hover1">
                    Amit
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                        {['/', '/Resume', '/Projects', '/Contact'].map((path, index) => (
                            <Nav.Link
                                key={path}
                                as={NavLink}
                                to={path}
                                className="nav-link"
                                style={({ isActive }) => ({
                                    color: isActive ? '#00ff7f' : 'white',
                                })}
                                onMouseEnter={(e) => (e.target.style.color = '#00ff7f')}
                                onMouseLeave={(e) => {
                                    const isActive = window.location.pathname === path;
                                    e.target.style.color = isActive ? '#00ff7f' : 'white';
                                }}
                            >
                                {['Home', 'Resume', 'Work', 'Contact'][index]}
                            </Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
