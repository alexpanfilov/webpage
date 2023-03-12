import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Image from "react-bootstrap/Image";
import N26Logo from "../images/N26-Logo.svg";
import MobProdLogo from "../images/Mobiles-Produkt-Logo.svg";
import StarRatingComponent from "react-star-rating-component";
import Button from "react-bootstrap/Button";
import ComdirectLogo from "../images/comdirect-logo-1.svg";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faStar,
  faStarHalfStroke,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Popover } from "react-bootstrap";

library.add(faStar, faStarHalfStroke, faCircleInfo);

const TopBoxes = () => {
  const popover1 = (
    <Popover id="popover-basic">
      <Popover.Body>
        N26 erhebt keine Gebühr auf Zahlungen mit der Mastercard Debit - egal ob
        diese in Euro oder einer anderen Währung erfolgen.
      </Popover.Body>
    </Popover>
  );

  const Box1Feature2 = () => (
    <OverlayTrigger placement="top" overlay={popover1}>
      <Button variant="text" size="sm">
        <FontAwesomeIcon icon="fa-solid fa-circle-info" />
      </Button>
    </OverlayTrigger>
  );

  const popover2 = (
    <Popover id="popover-basic">
      <Popover.Body>
        N26 bietet ein vollwertiges Bankkonto fürs Smartphone: Alle wichtigen
        Aufgaben, von der Kontoeröffnung bis zur Einrichtung eines Dispos oder
        dem Geldabheben, lassen sich per Handy erledigen.
      </Popover.Body>
    </Popover>
  );

  const Box1Feature3 = () => (
    <OverlayTrigger placement="top" overlay={popover2}>
      <Button variant="text" size="sm">
        <FontAwesomeIcon icon="fa-solid fa-circle-info" />
      </Button>
    </OverlayTrigger>
  );

  const popover3 = (
    <Popover id="popover-basic">
      <Popover.Body>
        Du kannst die Kontoführungsgebühr einfach vermeiden, indem du monatlich
        entweder für einen Geldeingang von 700 € sorgst <em>und/oder</em> 3-mal
        mit Google Pay/Apple Pay bezahlst <em>und/oder</em> im Comdirect-Depot 1
        Trade oder 1 Sparplanausführung in Auftrag gibst. In jedem Fall entfällt
        die Kontoführungsgebühr in den ersten 6 Monaten.
      </Popover.Body>
    </Popover>
  );

  const Box2Feature1 = () => (
    <OverlayTrigger placement="top" overlay={popover3}>
      <Button variant="text" size="sm">
        <FontAwesomeIcon icon="fa-solid fa-circle-info" />
      </Button>
    </OverlayTrigger>
  );

  const popover4 = (
    <Popover id="popover-basic">
      <Popover.Body>
        Die Banking-App hat sowohl im Google Playstore als auch im App Store von
        Apple mit die besten Nutzer-Bewertungen. Im App Store wird sie zu den
        besten Finanz-Apps überhaupt gezählt.
      </Popover.Body>
    </Popover>
  );

  const Box2Feature2 = () => (
    <OverlayTrigger placement="top" overlay={popover4}>
      <Button variant="text" size="sm">
        <FontAwesomeIcon icon="fa-solid fa-circle-info" />
      </Button>
    </OverlayTrigger>
  );

  const popover5 = (
    <Popover id="popover-basic">
      <Popover.Body>
        Du kannst bei zahlreichen Einzelhändlern und Tankstellen beliebig oft
        gebührenfrei an der Kasse Geld einzahlen und abheben.
      </Popover.Body>
    </Popover>
  );

  const Box2Feature3 = () => (
    <OverlayTrigger placement="top" overlay={popover5}>
      <Button variant="text" size="sm">
        <FontAwesomeIcon icon="fa-solid fa-circle-info" />
      </Button>
    </OverlayTrigger>
  );

  return (
    <>
      <Container fluid="xl">
        <Row className="boxesMargin">
          <Col className="topBoxContainer" lg>
            <Card className="topBox">
              <Card.Body>
                <Row>
                  <Col xs={4}>
                    <Badge bg="success" className="teaserboxSpecialtext">
                      Empfehlung:
                      <br />
                      Bestes kostenloses Konto
                    </Badge>
                    <Badge bg="info" className="teaserboxSpecialtext2">
                      <Image
                        height={20}
                        width={20}
                        src={MobProdLogo}
                        className="MobProdLogo"
                      ></Image>
                      Top mobiles Konto
                    </Badge>
                  </Col>
                  <Col xs={5}>
                    <Card.Title>
                      <Image
                        height={70}
                        width={100}
                        src={N26Logo}
                        className="teaserLogo"
                      ></Image>
                    </Card.Title>
                    <div className="stars">
                      <StarRatingComponent
                        name="rate1"
                        starCount={5}
                        value={4.5}
                        editing={false}
                        renderStarIcon={() => (
                          <FontAwesomeIcon icon="fa-solid fa-star" />
                        )}
                        renderStarIconHalf={() => (
                          <FontAwesomeIcon icon="fa-solid fa-star-half-stroke" />
                        )}
                        emptyStarColor={"#FFB401"}
                      />
                    </div>
                  </Col>
                  <Col xs={3}>
                    <div className="teaserbox_note">
                      <div className="product_note">
                        <span className="note_outer note_content">1,1</span>
                        <span className="note_text medium_text note_content">
                          Sehr gut
                        </span>
                      </div>
                    </div>
                  </Col>
                </Row>
                <div className="teaserbox_bullets">
                  <div className="feature_wrap">
                    <span className="kk_feature_1 kk_feature most_important">
                      <FontAwesomeIcon icon="fa-solid fa-circle-check" />
                      <span className="kk_feature_text">
                        Bedingungslos kostenlos
                      </span>
                    </span>
                    <span className="kk_feature_2 kk_feature most_important">
                      <FontAwesomeIcon icon="fa-solid fa-circle-check" />
                      <span className="kk_feature_text">
                        Weltweit gebührenfrei mit Karte zahlen <Box1Feature2 />
                      </span>
                    </span>
                    <span className="kk_feature_3 kk_feature most_important">
                      <FontAwesomeIcon icon="fa-solid fa-circle-check" />
                      <span className="kk_feature_text">
                        Top Smartphone-Konto <Box1Feature3 />
                      </span>
                    </span>
                  </div>
                </div>
              </Card.Body>
              <Card.Body className="text-center teaserBoxFooter">
                <Button variant="danger" className="">
                  Zum Anbieter »
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="teaserbox">
            <Card className="topBox">
              <Card.Body>
                <Row>
                  <Col xs={4}>
                    {" "}
                    <Badge bg="success" className="teaserboxSpecialtext">
                      Top:
                      <br />
                      Beste Direktbank
                    </Badge>
                  </Col>
                  <Col xs={5}>
                    <Card.Title>
                      <Image
                        height={70}
                        src={ComdirectLogo}
                        className="teaserLogo"
                      ></Image>
                    </Card.Title>
                    <div className="stars">
                      <StarRatingComponent
                        name="rate1"
                        starCount={5}
                        value={4.5}
                        editing={false}
                        renderStarIcon={() => (
                          <FontAwesomeIcon icon="fa-solid fa-star" />
                        )}
                        renderStarIconHalf={() => (
                          <FontAwesomeIcon icon="fa-solid fa-star-half-stroke" />
                        )}
                        emptyStarColor={"#FFB401"}
                      />
                    </div>
                  </Col>
                  <Col xs={3}>
                    <div className="teaserbox_note">
                      <div className="product_note">
                        <span className="note_outer note_content">1,2</span>
                        <span className="note_text medium_text note_content">
                          Sehr gut
                        </span>
                      </div>
                    </div>
                  </Col>
                </Row>
                <div className="teaserbox_bullets">
                  <div className="feature_wrap">
                    <span className="kk_feature_1 kk_feature most_important">
                      <FontAwesomeIcon icon="fa-solid fa-circle-check" />
                      <span className="kk_feature_text">
                        Bei aktiver Nutzung kostenlos <Box2Feature1 />
                      </span>
                    </span>
                    <span className="kk_feature_2 kk_feature most_important">
                      <FontAwesomeIcon icon="fa-solid fa-circle-check" />
                      <span className="kk_feature_text">
                        Top Banking App <Box2Feature2 />
                      </span>
                    </span>
                    <span className="kk_feature_3 kk_feature most_important">
                      <FontAwesomeIcon icon="fa-solid fa-circle-check" />
                      <span className="kk_feature_text">
                        Kostenlos einzahlen & abheben an der Kasse
                        <Box2Feature3 />
                      </span>
                    </span>
                  </div>
                </div>
              </Card.Body>
              <Card.Body className="text-center teaserBoxFooter">
                <Button variant="danger" className="">
                  Zum Anbieter »
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <hr />
      </Container>
    </>
  );
};

export default TopBoxes;
