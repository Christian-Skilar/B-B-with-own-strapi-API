import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <>
  <Navbar bg="dark" variant="dark">
    <Link className="logo" to="/">Holidaze</Link>
    <Nav className="mr-auto">
    <Link className="nav-link" to="/">Home</Link>
    <Link className="nav-link" to="/contact">Contact</Link>
    </Nav>
  </Navbar>
</>
    )
}

export default Navigation
