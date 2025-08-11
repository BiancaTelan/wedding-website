import { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";

export default function RSVP() {
  const [name, setName] = useState("");
  const [attend, setAttend] = useState("yes");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, attend });
    setSent(true);
  };

  return (
    <section id="rsvp" className="py-5">
      <Container>
        <h2 className="text-center mb-4">RSVP</h2>
        {!sent ? (
          <Form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: 500 }}>
            <Form.Group className="mb-3">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Will you attend?</Form.Label>
              <Form.Select value={attend} onChange={(e) => setAttend(e.target.value)}>
                <option value="yes">Yes, I’ll be there!</option>
                <option value="no">Sorry, I can’t make it</option>
              </Form.Select>
            </Form.Group>
            <Button variant="primary" type="submit" style={{ backgroundColor: '#b5838d', border: 'none' }}>
              Submit
            </Button>
          </Form>
        ) : (
          <Alert variant="success" className="text-center">
            Thank you for your response!
          </Alert>
        )}
      </Container>
    </section>
  );
}
