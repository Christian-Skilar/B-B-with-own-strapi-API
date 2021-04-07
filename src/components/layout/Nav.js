import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Link className="logo" to="/">Holidaze</Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mr-auto">
                      <Link className="nav-links" to="/">Home</Link>
                      <Link className="nav-links" to="/hotels">Hotels</Link>
                      <Link className="nav-links" to="/contact">Contact</Link>
                  </Nav>
              </Navbar.Collapse>
          </Navbar>
        </>
    )
}

export default Navigation
