import { Container, Nav, Navbar as BSNavbar } from "react-bootstrap";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <BSNavbar expand="lg" bg="white" sticky="top" className="shadow-sm">
      <Container>
         <BSNavbar.Brand
          as={Link}
          to="home"
          smooth={true}
          duration={500}
          offset={-70}
          style={{
            fontFamily: "Great Vibes",
            fontSize: "2rem",
            color: "#b5838d",
            cursor: "pointer",
          }}
        >
          John & Jane
        </BSNavbar.Brand>

        <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BSNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="home"
              smooth={true}
              duration={500}
              offset={0}
              spy={true}
              isDynamic={true}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="details"
              smooth={true}
              duration={500}
              offset={-70}
            >
              Details
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="gallery"
              smooth={true}
              duration={500}
              offset={-70}
            >
              Gallery
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="rsvp"
              smooth={true}
              duration={500}
              offset={-70}
            >
              RSVP
            </Nav.Link>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
}
