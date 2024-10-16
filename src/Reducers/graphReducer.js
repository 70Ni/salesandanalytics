import OrderTime from "../api/OrdersOvertime.json";

const initialState = {
  OrderTime: OrderTime,
};

const GraphReducer = (state = initialState, action) => {
  let lastSixData21 = OrderTime[0]["21"];
  let lastSixData22 = OrderTime[0]["22"];
  switch (action.type) {
    case "Last 6 Hours":
    case "Last 6 Month":
      lastSixData21 = OrderTime[0]["21"].slice(-6,13);
      lastSixData22 = OrderTime[0]["22"].slice(-6,13);

      return {
        ...state,
        OrderTime: { lastSixData21, lastSixData22 },
      };
    // Orders.Orders[0].customer

    default:
      return {
        ...state,
        OrderTime: { lastSixData21, lastSixData22 },
      };
  }
};

export default GraphReducer;
