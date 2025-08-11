import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="py-3 bg-white text-center shadow-sm">
      <Container>
        <p style={{ margin: 0, color: "#b5838d" }}>
          © {new Date().getFullYear()} John & Jane's Wedding
        </p>
      </Container>
    </footer>
  );
}
