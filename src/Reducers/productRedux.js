import Products from "../api/Products.json";

const initialState = {
  Products: Products,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH":
      const searchKeys = Object.assign(initialState.Products);
      const filteredKeys = searchKeys.filter((key) =>
        key["product-Name"].toLowerCase().includes(action.payload.toLowerCase())
      );
      return { ...state, Products: filteredKeys };
    // Orders.Orders[0].customer
    case "Black":
    case "White":
      const productColor = initialState.Products.filter(
        (color) => color["color"] === action.type
      );
      return { ...state, Products: productColor };

    case "Hoodies":
    case "T-Shirt":
      const category = initialState.Products.filter(
        (type) => type["category"] === action.type
      );
      return { ...state, Products: category };

    // case "Hoodies":
    // case "Pending":
    //   switch (action.type) {
    //     case "SEARCH":
    //       const searchKeys = Object.assign(Orders);
    //       const filteredKeys = searchKeys.filter((key) =>
    //         key.customer.toLowerCase().includes(action.payload.toLowerCase())
    //       );
    //       return { ...state, Orders: filteredKeys, act: action.type };
    //   }
    //   const paidOrders = Orders.filter(
    //     // (order) => order["payment-status"] === action.type
    //   );
    //   return { ...state, Products: Products };
    case "CLEAR":
      return { ...state, Products: Products };

    default:
      return { ...state, Products: Products };
  }
};

export default productReducer;
