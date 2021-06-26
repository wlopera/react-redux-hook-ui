import React, { useState } from "react";
import { Row, Col, Card, CardHeader } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";

const Store = () => {
  const state = useSelector((state) => state);

  const [amount, setAmount] = useState(state.reducerStore.amount);
  const [value, setValue] = useState(state.reducerStore.value);

  const dispatch = useDispatch();

  const dispatchType = () => {
    dispatch({
      type: "PRICE_AMOUNT",
      payload: { amount },
    });
    dispatch({
      type: "PRICE_VALUE",
      payload: { value },
    });
  };

  return (
    <Row>
      <Col sm="8">
        <CardHeader>
          <h1>Venta</h1>
        </CardHeader>
        <Card body>
          Cantidad:{" "}
          <input
            type="text"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
          Valor:{" "}
          <input
            type="text"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
          <br />
          <button onClick={dispatchType}>Actualizar</button>
        </Card>
      </Col>
    </Row>
  );
};

export default Store;
