import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Translator from "./Translator";

function Ch() {
  const [state, UNSAFE_setState] = useState({ text: "", ascii: "" });
  const setState = (data) => UNSAFE_setState({ ...state, ...data });

  useEffect(() => {
    const text = state.text.split("");
    if (state.text !== "") {
      setState({
        ascii: text.map((text) => text.charCodeAt()).join(" "),
      });
    } else {
      setState({ ascii: "" });
    }
    // eslint-disable-next-line
  }, [state.text]);

  const setter = (text) => setState({ text });

  return (
    <Container className="mt-3">
      <Row>
        <Col>
          <h2 className="text-center">Konversi Teks biasa ke ASCII</h2>
        </Col>
      </Row>
      <Translator
        labelInput="Masukan Teks Biasa"
        labelOutput="Teks Konversi"
        fromText={state.text}
        toText={state.ascii}
        setter={setter}
      />
    </Container>
  );
}

export default Ch;
