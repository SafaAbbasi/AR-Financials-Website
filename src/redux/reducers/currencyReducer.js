import { SET_CURRENCY } from "../actions/currencyActions";

const initState = {
  currencySymbol: "Rs",
  currencyName: "PKR",
  currencyRate: 1
};

const currencyReducer = (state = initState, action) => {
  if (action.type === SET_CURRENCY) {
    const currencyName = action.payload.currencyName;

    if (currencyName === "PKR") {
      return {
        ...state,
        currencySymbol: "Rs",
        currencyRate: action.payload.currencyRate,
        currencyName
      };
    }
    if (currencyName === "EUR") {
      return {
        ...state,
        currencySymbol: "€",
        currencyRate: action.payload.currencyRate,
        currencyName
      };
    }
    if (currencyName === "GBP") {
      return {
        ...state,
        currencySymbol: "£",
        currencyRate: action.payload.currencyRate,
        currencyName
      };
    }
  }

  return state;
};

export default currencyReducer;
