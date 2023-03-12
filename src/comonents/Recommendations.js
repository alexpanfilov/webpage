import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Container from "react-bootstrap/Container";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Badge from "react-bootstrap/Badge";
import MobProdLogo from "../images/Mobiles-Produkt-Logo.svg";

const Recommendations = (props) => {
  return (
    <Container fluid="xl">
      <div className="products-listing list-cards-container">
        {props.filteredList.map((item) => {
          const popovercashWithdrawal = (
            <Popover id="popover-basic">
              <Popover.Body>{item.cashWithdrawalHint}</Popover.Body>
            </Popover>
          );

          const CashWithdrawal = () => (
            <OverlayTrigger placement="top" overlay={popovercashWithdrawal}>
              <Button variant="text" size="sm">
                <FontAwesomeIcon icon="fa-solid fa-circle-info" />
              </Button>
            </OverlayTrigger>
          );

          const popoverChargeHint = (
            <Popover id="popover-basic">
              <Popover.Body>{item.chargeHint}</Popover.Body>
            </Popover>
          );

          const ChargeHintDisplay = () => (
            <OverlayTrigger placement="top" overlay={popoverChargeHint}>
              <Button variant="text" size="sm">
                <FontAwesomeIcon icon="fa-solid fa-circle-info" />
              </Button>
            </OverlayTrigger>
          );

          const popoverFirstItem = (
            <Popover id="popover-basic">
              <Popover.Body>{item.description.firstItem.hint}</Popover.Body>
            </Popover>
          );

          const FirstItem = () => (
            <OverlayTrigger placement="top" overlay={popoverFirstItem}>
              {item.description.firstItem.hint !== "" ? (
                <Button variant="text" size="sm">
                  <FontAwesomeIcon icon="fa-solid fa-circle-info" />
                </Button>
              ) : null}
            </OverlayTrigger>
          );

          const popoverSecondItem = (
            <Popover id="popover-basic">
              <Popover.Body>{item.description.secondItem.hint}</Popover.Body>
            </Popover>
          );

          const SecondItem = () => (
            <OverlayTrigger placement="top" overlay={popoverSecondItem}>
              {item.description.secondItem.hint !== "" ? (
                <Button variant="text" size="sm">
                  <FontAwesomeIcon icon="fa-solid fa-circle-info" />
                </Button>
              ) : null}
            </OverlayTrigger>
          );

          const popoverThirdItem = (
            <Popover id="popover-basic">
              <Popover.Body>{item.description.thirdItem.hint}</Popover.Body>
            </Popover>
          );

          const ThirdItem = () => (
            <OverlayTrigger placement="top" overlay={popoverThirdItem}>
              {item.description.thirdItem.hint !== "" ? (
                <Button variant="text" size="sm">
                  <FontAwesomeIcon icon="fa-solid fa-circle-info" />
                </Button>
              ) : null}
            </OverlayTrigger>
          );

          return (
            <Card key={item.id} className="reCardStyle">
              {item.isTop ? (
                <Badge bsPrefix="topRecommendation">
                  "Unsere Top Girokonto Empfehlung"
                </Badge>
              ) : null}

              <Card.Body>
                <Row>
                  <Col
                    className="grid_child"
                    sm={6}
                    xl={{ order: 1 }}
                    xs={{ order: 1 }}
                    md={{ order: 1 }}
                    xl={2}
                    xs={6}
                  >
                    <Image src={item.logo} className="recLogo" />
                  </Col>
                  <Col
                    className="grid_child chargeStyle"
                    sm={6}
                    xl={{ order: 2 }}
                    xs={{ order: 3 }}
                    md={{ order: 3 }}
                    md={6}
                    xl={2}
                  >
                    <div className="geb-item">
                      <p className="geb-item-value featured">
                        <span className="kosten_pa_1">{item.price}</span>
                      </p>
                      <p className="geb-item-text">
                        Grundgebühr{" "}
                        {item.chargeHint !== "" ? <ChargeHintDisplay /> : null}
                      </p>
                    </div>
                  </Col>

                  <Col
                    className="grid_child"
                    xs={6}
                    sm={6}
                    xl={{ order: 3 }}
                    xs={{ order: 4 }}
                    xl={2}
                  >
                    <div className="geb-item">
                      <span className="bargeldauszahlung_value">
                        <span className="kosten_pa_1">
                          {item.cashWithdrawal}
                        </span>
                      </span>
                      <span className="geb-item-text">
                        Bargeldauszahlung
                        <span className="tipr">
                          <CashWithdrawal />
                        </span>
                      </span>
                      <span className="zinsen_value">
                        {item.overdraftValue}
                      </span>
                      <span className="geb-item-text">
                        {item.overdraftTitle}
                      </span>
                    </div>
                  </Col>

                  <Col
                    className="grid_child"
                    xs={12}
                    sm={12}
                    xl={{ order: 4 }}
                    xs={{ order: 5 }}
                    xl={3}
                  >
                    <div className="feature_wrap cpt_is_set">
                      <span className="kk_feature_1 kk_feature most_important">
                        <FontAwesomeIcon
                          icon={item.description.firstItem.icon}
                          className={item.description.firstItem.iconColor}
                        />
                        {item.description.firstItem.title}{" "}
                        {item.description.firstItem.hint !== "" ? (
                          <FirstItem />
                        ) : null}
                      </span>
                      <span className="kk_feature_1 kk_feature most_important">
                        <FontAwesomeIcon
                          icon={item.description.secondItem.icon}
                          className={item.description.secondItem.iconColor}
                        />
                        {item.description.secondItem.title}{" "}
                        {item.description.secondItem.hint !== "" ? (
                          <SecondItem />
                        ) : null}
                      </span>
                      <span className="kk_feature_1 kk_feature most_important">
                        <FontAwesomeIcon
                          icon={item.description.thirdItem.icon}
                          className={item.description.thirdItem.iconColor}
                        />
                        {item.description.thirdItem.title}{" "}
                        {item.description.thirdItem.hint !== "" ? (
                          <ThirdItem />
                        ) : null}
                      </span>
                    </div>
                  </Col>

                  <Col
                    className="grid_child"
                    sm={6}
                    xl={1}
                    sm={{ order: 2 }}
                    xl={{ order: 5 }}
                  >
                    <div className="note">
                      <div className="product_note">
                        <span className="note_outer note_content">
                          {item.rating}
                        </span>
                        <span className="note_text short_text note_content">
                          {item.ratingTitle}
                        </span>
                      </div>
                    </div>
                  </Col>
                  <Col
                    className="grid_child"
                    sm={2}
                    xl={{ order: 5 }}
                    xs={{ order: "last" }}
                    md={{ order: "last" }}
                    md={12}
                    xl={2}
                  >
                    <Button className="recommendationButton">
                      ZUM ANGEBOT »
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Container className="recommendationFooter">
                    <Col
                      xl={6}
                      xl={{ order: "first", span: 4, offset: 1 }}
                      className="stoerer_wrap"
                    >
                      {item.additionalOptionOne !== "" ? (
                        <span className="stoerer stoerer_eins">
                          {item.additionalOptionOne}
                        </span>
                      ) : null}
                      {item.additionalOptionTwo !== "" ? (
                        <span className="stoerer stoerer_zwei second">
                          <Image
                            height={20}
                            width={20}
                            src={MobProdLogo}
                            className="MobProdLogo"
                          ></Image>{" "}
                          {item.additionalOptionTwo}
                        </span>
                      ) : null}
                    </Col>
                    <Col xl={6} xl={{ order: "last" }}>
                      <Accordion className="recommendationAcc">
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>Productdetails</Accordion.Header>
                          <Accordion.Body>
                            <Tabs
                              defaultActiveKey="allgemein"
                              id="uncontrolled-tab-example"
                              className="mb-3"
                            >
                              <Tab eventKey="allgemein" title="Allgemein">
                                <div
                                  className="tab-content table-1 active"
                                  id="tabs1-1803"
                                >
                                  <table className="product-detail-table">
                                    <tbody>
                                      <tr>
                                        <td>
                                          <strong>Allgemeines</strong>
                                        </td>
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <td>Bank</td>
                                        <td>ING</td>
                                      </tr>
                                      <tr>
                                        <td>Produktname</td>
                                        <td>Girokonto</td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <strong>Gebühren &amp; Prämie</strong>
                                        </td>
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <td>Kontoführungsgebühr</td>
                                        <td>
                                          0 €{" "}
                                          <span
                                            className="tipr"
                                            data-tip="ab 700 € monatlichem Gehaltseingang, sonst 4,90 € pro Monat ab dem 3. Monat nach Kontoeröffnung"
                                            data-hasqtip="54"
                                            aria-describedby="qtip-0"
                                          >
                                            <i className="fa fa-info-circle vgl-icon-color-neutral"></i>
                                          </span>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>Mindestgeldeingang</td>
                                        <td>700 €</td>
                                      </tr>
                                      <tr>
                                        <td>Prämie</td>
                                        <td> €</td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <strong>Zinsen</strong>
                                        </td>
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <td>Dispozins</td>
                                        <td>8,99 % p. a.</td>
                                      </tr>
                                      <tr>
                                        <td>Überziehungszins</td>
                                        <td>8,99 % p. a.</td>
                                      </tr>
                                      <tr>
                                        <td>Verwahrentgelt</td>
                                        <td>-</td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <strong>Karten</strong>
                                        </td>
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <td>Karten inklusive</td>
                                        <td>
                                          Visa Card [Debitkarte]{" "}
                                          <span
                                            className="tipr"
                                            data-tip="Bei einer Debitkarte werden die Kartenumsätze direkt vom Konto abgebucht. Vorteil der Visa-Karte: Du kannst an nahezu allen Automaten mit Visa-Zeichen in Deutschland und der Eurozone gebührenfrei Geld abheben."
                                            data-hasqtip="55"
                                            aria-describedby="qtip-0"
                                          ></span>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>Weitere Karten</td>
                                        <td>
                                          Girocard für mtl. 0,99 €{" "}
                                          <span
                                            className="tipr"
                                            data-tip="Neukunden können die Karte vorab testen und im Nachgang über das Onlinebanking kündigen."
                                            data-hasqtip="56"
                                            aria-describedby="qtip-0"
                                          ></span>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>Partnerkarte</td>
                                        <td>0 €</td>
                                      </tr>
                                      <tr>
                                        <td>Maximale Haftung</td>
                                        <td>0 €</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </Tab>
                              <Tab
                                eventKey="bezahlen"
                                title="Bezahlen / Bargeld abheben"
                              ></Tab>
                              <Tab eventKey="bewertung" title="Bewertung"></Tab>
                            </Tabs>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </Col>
                  </Container>
                </Row>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </Container>
  );
};

export default Recommendations;
