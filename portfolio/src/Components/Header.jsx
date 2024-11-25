import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <Navbar expand="lg" className="bg-black">
            <Container>
                <Navbar.Brand as={NavLink} to="/" className='hover1'>Amit</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" >
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link
                            as={NavLink}
                            to="/"
                            className="nav-link"
                            style={({ isActive }) => ({
                                color: isActive ? '#00ff7f' : 'white'
                            })}
                            onMouseEnter={(e) => e.target.style.color = '#00ff7f'}
                            onMouseLeave={(e) => {
                                const isActive = window.location.pathname === '/';
                                e.target.style.color = isActive ? '#00ff7f' : 'white';
                            }}>
                            Home
                        </Nav.Link>
                        <Nav.Link
                            as={NavLink}
                            to="/Resume"
                            className="nav-link"
                            style={({ isActive }) => ({
                                color: isActive ? '#00ff7f' : 'white'
                            })}
                            onMouseEnter={(e) => e.target.style.color = '#00ff7f'}
                            onMouseLeave={(e) => {
                                const isActive = window.location.pathname === '/Resume';
                                e.target.style.color = isActive ? '#00ff7f' : 'white';
                            }}>
                            Resume
                        </Nav.Link>
                        <Nav.Link
                            as={NavLink}
                            to="/Projects"
                            className="nav-link"
                            style={({ isActive }) => ({
                                color: isActive ? '#00ff7f' : 'white'
                            })}
                            onMouseEnter={(e) => e.target.style.color = '#00ff7f'}
                            onMouseLeave={(e) => {
                                const isActive = window.location.pathname === '/Projects';
                                e.target.style.color = isActive ? '#00ff7f' : 'white';
                            }}>
                            Work
                        </Nav.Link>
                        <Nav.Link
                            as={NavLink}
                            to="/Contact"
                            className="nav-link"
                            style={({ isActive }) => ({
                                color: isActive ? '#00ff7f' : 'white'
                            })}
                            onMouseEnter={(e) => e.target.style.color = '#00ff7f'}
                            onMouseLeave={(e) => {
                                const isActive = window.location.pathname === '/Contact';
                                e.target.style.color = isActive ? '#00ff7f' : 'white';
                            }}>
                            Contact
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;