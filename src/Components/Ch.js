import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

function Ch() {
  const [state, UNSAFE_setState] = useState({ text: "", ascii: "" });
  const setState = (data) => UNSAFE_setState({ ...state, ...data });

  useEffect(() => {
    let arr = [];
    const text = state.text.split("");
    if (state.text !== "") {
      text.forEach((t) => arr.push(t.charCodeAt()));
      setState({
        ascii: arr.reduce((curr, accu) => {
          return String(curr) + " " + String(accu);
        }),
      });
    } else {
      setState({ ascii: "" });
    }
    // eslint-disable-next-line
  }, [state.text]);

  return (
    <Container className="mt-3">
      <Row>
        <Col>
          <h2 className="text-center">Konversi Teks biasa ke ASCII</h2>
        </Col>
      </Row>
      <Form className="mt-2 text-center">
        <Row>
          <Col md={6}>
            <Form.Group>
              <Form.Label as="h4">Masukan teks biasa</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                value={state.text}
                spellCheck={false}
                onChange={(e) => setState({ text: e.target.value })}
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label as="h4">Teks konversi</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                value={state.ascii}
                readOnly
              ></Form.Control>
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default Ch;
