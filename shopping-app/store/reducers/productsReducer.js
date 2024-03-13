import productsData from "../../products.json";

const initialState = {
  products: productsData,
  selectedProduct: null,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_PRODUCT":
      return {
        ...state,
        selectedProduct: action.payload,
      };
    default:
      return state;
  }
};

export default productsReducer;
