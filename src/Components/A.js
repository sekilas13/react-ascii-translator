import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

function A() {
  const [state, UNSAFE_setState] = useState({ ascii: "", text: "" });
  const setState = (data) => UNSAFE_setState({ ...state, ...data });

  useEffect(() => {
    let arr = [];
    const ascii = state.ascii.trim().split(" ");
    if (state.ascii !== "") {
      ascii.forEach((code) => arr.push(String.fromCharCode(code)));
      setState({
        text: arr.reduce((curr, accu) => {
          return String(curr) + String(accu);
        }),
      });
    } else {
      setState({ text: "" });
    }
    // eslint-disable-next-line
  }, [state.ascii]);

  return (
    <Container className="mt-3">
      <Row>
        <Col>
          <h2 className="text-center">Konversi ASCII ke Teks Biasa</h2>
        </Col>
      </Row>
      <Form className="mt-2 text-center">
        <Row>
          <Col md={6}>
            <Form.Group>
              <Form.Label as="h4">Masukan ASCII</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                value={state.ascii}
                spellCheck={false}
                onChange={(e) => setState({ ascii: e.target.value })}
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label as="h4">Teks konversi</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                value={state.text}
                readOnly
              ></Form.Control>
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default A;
