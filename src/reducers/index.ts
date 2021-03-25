import { combineReducers } from "redux";
import amountReducer from "./set-amount";
import currencyHistoryReducer from "./currency-history";
import primaryCurrencyReducer from "./primary-currency";
import secondaryCurrencyReducer from "./secondary-currency";
import isLoadingReducer from "./set-loading";

const reducers = combineReducers({
   amount: amountReducer,
   primaryCurrency: primaryCurrencyReducer,
   secondaryCurrency: secondaryCurrencyReducer,
   isLoading: isLoadingReducer,
   currencyHistory: currencyHistoryReducer,
});

export default reducers;
