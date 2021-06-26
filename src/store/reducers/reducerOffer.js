const initialState = {
  offer: {
    promo: null,
    discount: 0,
  }
};

const reducerOffer = (state = initialState, action) => {
  switch (action.type) {
    case "OFFER_PROMO":
      return {
        ...state, // valor actual en el store
        promo: action.payload, // valor a modificar
      };

    case "OFFER_DISCOUNT":
      return {
        ...state, // valor actual en el store
        discount: action.payload, // valor a modificar
      };
  
    default:
      return state
  }
 
};

export default reducerOffer
