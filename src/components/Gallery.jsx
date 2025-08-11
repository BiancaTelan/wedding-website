import { Container, Row, Col } from "react-bootstrap";

export default function Gallery() {
  const basePath = import.meta.env.BASE_URL; 
  const images = [
    `${basePath}images/gallery1.jpg`,
    `${basePath}images/gallery2.jpg`,
    `${basePath}images/gallery3.jpg`,
    `${basePath}images/gallery4.jpg`
  ];

  return (
    <section id="gallery" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Our Gallery</h2>
        <Row>
          {images.map((src, idx) => (
            <Col key={idx} md={3} sm={6} className="mb-4 d-flex justify-content-center">
              <img
                src={src}
                alt={`Gallery ${idx}`}
                style={{
                  width: '250px',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '0.25rem',
                  boxShadow: '0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)'
                }}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
