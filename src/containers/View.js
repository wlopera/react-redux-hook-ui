import React from "react";
import { Row, Col, Card, CardHeader, CardTitle } from "reactstrap";
import { useSelector } from "react-redux";

const View = () => {
  const state = useSelector((state) => state);

  return (
    <Row>
      <Col sm="8">
        <CardHeader>
          <h1>Mercado</h1>
        </CardHeader>
        <Card body>
          <CardTitle tag="h2">Factura</CardTitle>
          <hr />

          <div>
            <ul>
              <li>
                Producto: <strong>{state.reducerKitchen.type}</strong>
              </li>
              <li>
                Tipo: <strong> {state.reducerKitchen.name}</strong>
              </li>
              <li>
                Cantidad: <strong>{state.reducerStore.amount}</strong>
              </li>
              <li>
                Valor: <strong> {state.reducerStore.value}</strong>
              </li>
            </ul>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default View;
