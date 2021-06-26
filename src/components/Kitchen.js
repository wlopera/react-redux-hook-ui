import React, { useState } from "react";
import { Row, Col, Card, CardHeader } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";

const Kitchen = () => {
  const state = useSelector((state) => state);

  const [type, setType] = useState(state.reducerKitchen.type);
  const [name, setName] = useState(state.reducerKitchen.name);

  const dispatch = useDispatch();

  const dispatchType = () => {
    dispatch({
      type: "CAKE_TYPE",
      payload: { type },
    });
    dispatch({
      type: "CAKE_NAME",
      payload: { name },
    });
  };

  return (
    <Row>
      <Col sm="8">
        <CardHeader>
          <h1>Producto</h1>
        </CardHeader>
        <Card body>
          Tipo:{" "}
          <input
            type="text"
            value={type}
            onChange={(event) => setType(event.target.value)}
          />
          Nombre:{" "}
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <br />
          <button onClick={dispatchType}>Actualizar</button>
        </Card>
      </Col>
    </Row>
  );
};

export default Kitchen;
