import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Translator from "./Translator";

function A() {
  const [state, UNSAFE_setState] = useState({ ascii: "", text: "" });
  const setState = (data) => UNSAFE_setState({ ...state, ...data });

  useEffect(() => {
    const ascii = state.ascii.trim().split(" ");
    if (state.ascii !== "") {
      setState({
        text: ascii.map((code) => String.fromCharCode(code)).join(""),
      });
    } else {
      setState({ text: "" });
    }
    // eslint-disable-next-line
  }, [state.ascii]);

  const setter = (ascii) => setState({ ascii });

  return (
    <Container className="mt-3">
      <Row>
        <Col>
          <h2 className="text-center">Konversi ASCII ke Teks Biasa</h2>
        </Col>
      </Row>
      <Translator
        labelInput="Masukan ASCII"
        labelOutput="Teks Konversi"
        fromText={state.ascii}
        toText={state.text}
        setter={setter}
      />
    </Container>
  );
}

export default A;
