import { Container, Nav, Navbar as BSNavbar } from "react-bootstrap";

export default function Navbar() {
  return (
    <BSNavbar expand="lg" bg="white" sticky="top" className="shadow-sm">
      <Container>
        <BSNavbar.Brand
          href="#home"
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
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#details">Details</Nav.Link>
            <Nav.Link href="#gallery">Gallery</Nav.Link>
            <Nav.Link href="#rsvp">RSVP</Nav.Link>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
}
