import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Translator from "./Translator";

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
        fromText={state.text}
        toText={state.ascii}
        setter={setter}
      />
    </Container>
  );
}

export default A;
