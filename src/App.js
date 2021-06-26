import React from "react";
import { Provider } from "react-redux";
import store from "./store/Store";
import View from "./containers/View";
import Kitchen from "./components/Kitchen";
import Store from "./components/Store";
import { Row, Col } from "reactstrap";

const App = () => {
  return (
    <Provider store={store}>
      <Row>
        <Col sm="6">
          <View />
        </Col>
        <Col sm="6">
          <Kitchen />
          <hr />
          <Store />
        </Col>
      </Row>
    </Provider>
  );
};

export default App;
