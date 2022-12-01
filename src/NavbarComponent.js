import {Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const NavbarComponent = () => {

    return (

    <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/create">Create</Nav.Link>
                <Nav.Link as={Link} to="/bestTime">Best 5 Riders</Nav.Link>
                <Nav.Link as={Link} to="/allRidersTime">All Riders Time</Nav.Link>

            </Nav>
        </Container>
    </Navbar>
)
}