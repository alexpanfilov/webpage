import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

const FormFilters = (props) => {
  return (
    <>
      <Container>
        <Card className="products-filter_wrap">
          <Card.Body>
            <Row>
              <Col>
                <span className="filter-header"> Kontogebühren</span>
                <Form.Select onChange={props.handleCategoryChange}>
                  <option value="">Alle</option>
                  <option value="Kostenlose Kontoführung">
                    Kostenlose Kontoführung
                  </option>
                  <option value="Mit Startguthaben">Mit Startguthaben</option>
                </Form.Select>
              </Col>
              <Col>
                <span className="filter-header">Kontofeature</span>
                <Form.Select onChange={props.handleCategoryChange}>
                  <option value="">Alle</option>
                  <option value="Ohne Mindestgeldeingang">
                    Ohne Mindestgeldeingang
                  </option>
                  <option value="Gemeinschaftskonto möglich">
                    Gemeinschaftskonto möglich
                  </option>
                </Form.Select>
              </Col>
              <Col>
                <span className="filter-header">Geld abheben</span>
                <Form.Select>
                  <option value="">Alle</option>
                  <option value="Kostenlos Geld abheben Eurozone">
                    Kostenlos Geld abheben Eurozone
                  </option>
                  <option value="Kostenlos Geld abheben weltweit">
                    Kostenlos Geld abheben weltweit
                  </option>
                </Form.Select>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default FormFilters;
