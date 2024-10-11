import Orders from "../api/Orders.json";

const initialState = {
  Orders: Orders,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH":
      const searchKeys = Object.assign(Orders);
      const filteredKeys = searchKeys.filter((key) =>
        key.customer.toLowerCase().includes(action.payload.toLowerCase())
      );
      return { ...state, Orders: filteredKeys, act: action.type };
    // Orders.Orders[0].customer
    case "Shipped":
    case "Ready":
    case "Received":
      switch (action.type) {
        case "SEARCH":
          const searchKeys = Object.assign(Orders);
          const filteredKeys = searchKeys.filter((key) =>
            key.customer.toLowerCase().includes(action.payload.toLowerCase())
          );
          return { ...state, Orders: filteredKeys, act: action.type };
      }
      const orderStatus = Orders.filter(
        (order) => order["order-status"] === action.type
      );
      return { ...state, Orders: orderStatus };

    case "Paid":
    case "Pending":
      switch (action.type) {
        case "SEARCH":
          const searchKeys = Object.assign(Orders);
          const filteredKeys = searchKeys.filter((key) =>
            key.customer.toLowerCase().includes(action.payload.toLowerCase())
          );
          return { ...state, Orders: filteredKeys, act: action.type };
      }
      const paidOrders = Orders.filter(
        (order) => order["payment-status"] === action.type
      );
      return { ...state, Orders: paidOrders };
    case "CLEAR":
      return { ...state, Orders: Orders };

    default:
      return { ...state, Orders: Orders };
  }
};

export default orderReducer;
