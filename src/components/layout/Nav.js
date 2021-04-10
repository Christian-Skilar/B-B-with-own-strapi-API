import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink, Link } from "react-router-dom";

function Navigation() {
    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Link className="logo" to="/">Holidaze</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink className="nav-links" to="/">Home</NavLink>
                        <NavLink className="nav-links" to="/hotels">Hotels</NavLink>
                        <NavLink className="nav-links" to="/contact">Contact</NavLink>
                        <NavLink className="nav-links" to="/create">Create</NavLink>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
        </>
    )
}

export default Navigation
