import React from "react";
import Container from "react-bootstrap/Container";

const Hint = () => {
  return (
    <>
      <Container>
        <div className="hint">
          <p>
            <strong>Hinweis nach § 18 Abs. 6 Zahlungskontengesetz:</strong>{" "}
            Bitte beachte, dass dieser Vergleich keinen kompletten
            Marktüberblick darstellt.
          </p>
          <p>
            <strong>Provisionshinweis:</strong> Die Nutzung unseres
            Girokonto-Vergleichs kostenlos und unverbindlich. Wir finanzieren
            unsere Arbeit über Provisionen. Rufst Du über unseren Vergleich die
            Seite eines hier gelisteten Anbieters auf und eröffnest dort ein
            Girokonto, so bekommen wir von diesem Anbieter eine kleine
            Vergütung. Die Provision hat keinerlei Einfluss auf die Kosten
            Deines Girokontos.
          </p>
        </div>
      </Container>
    </>
  );
};

export default Hint;
