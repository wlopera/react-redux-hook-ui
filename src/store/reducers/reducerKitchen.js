const initialState = {
  type: "Torta",
  name: "Torta de Manzana",
};

const reducerKitchen = (state = initialState, action) => {
  switch (action.type) {
    case "CAKE_TYPE":
      return {
        ...state, // valor actual en el store
        type: action.payload.type, // valor a modificar
      };

    case "CAKE_NAME":
      return {
        ...state, // valor actual en el store
        name: action.payload.name, // valor a modificar
      };

    default:
      return state;
  }
};

export default reducerKitchen;
