import { useContext } from 'react';
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { UserContext } from "../context/UserContext";

function Navigation() {

    const {user} = useContext(UserContext);

    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Link className="logo" to="/">Holidaze</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <nav className="stroke">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/hotels">Hotels</a></li>
                        <li><a href="/contact">Contact</a></li>
                        {user &&
                        <li><a href="/admin">Admin</a></li>
                        }
                        {!user &&
                        <li><a href="/login">Login</a></li>
                        }
                    </ul>
                </nav>
                </Navbar.Collapse>
        </Navbar>
        </>
    )
}

export default Navigation
