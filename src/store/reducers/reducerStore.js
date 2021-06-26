const initialState = {
  amount: 0,
  value: 0,
};

const reducerStore = (state = initialState, action) => {
  switch (action.type) {
    case "PRICE_AMOUNT":
      return {
        ...state, // valor actual en el store
        amount: action.payload.amount, // valor a modificar
      };

    case "PRICE_VALUE":
      return {
        ...state, // valor actual en el store
        value: action.payload.value, // valor a modificar
      };

    default:
      return state;
  }
};

export default reducerStore;
