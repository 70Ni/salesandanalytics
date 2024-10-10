import customerData from "../api/Customers.json";
import customerEurope from "../api/fromEurop.json";
import customeReturning from "../api/reuturingCutomers.json";

const initialState = {
  "All Customers": customerData,
  "New Customers": customerEurope,
  "Returning Customers": customerEurope,
  "From Europe": customeReturning,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH":
      return { ...state, state, action };

    default:
      return { ...state, state, action };
  }
};

export default counterReducer;
