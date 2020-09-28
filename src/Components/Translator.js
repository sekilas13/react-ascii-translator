import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";

function Translator({ labelInput, labelOutput, fromText, toText, setter }) {
  return (
    <Form className="mt-2 text-center">
      <Row>
        <Col md={6}>
          <Form.Group>
            <Form.Label as="h4">{labelInput}</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              value={fromText}
              spellCheck={false}
              onChange={(e) => setter(e.target.value)}
            ></Form.Control>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group>
            <Form.Label as="h4">{labelOutput}</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              value={toText}
              readOnly
            ></Form.Control>
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
}

Translator.propTypes = {
  labelInput: PropTypes.string.isRequired,
  labelOutput: PropTypes.string.isRequired,
  fromText: PropTypes.string.isRequired,
  toText: PropTypes.string.isRequired,
  setter: PropTypes.func.isRequired,
};

export default Translator;
