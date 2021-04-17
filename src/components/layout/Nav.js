import { useContext } from 'react';
import { NavLink, Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import { UserContext } from "../context/UserContext";

function Navigation() {

    const {user} = useContext(UserContext);

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
                        {user &&
                        <NavLink className="nav-links" to="/admin">Admin</NavLink>
                        }
                        {!user &&
                        <NavLink className="nav-links" to="/login">Login</NavLink>
                        }
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
        </>
    )
}

export default Navigation
