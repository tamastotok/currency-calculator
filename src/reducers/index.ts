import { combineReducers } from "redux";
import amountReducer from "./amountOfCurrency";
import historyReducer from "./history";
import primaryReducer from "./primaryCurrency";
import secondaryReducer from "./secondaryCurrency";
import isLoadingReducer from "./setIsLoading";

const reducers = combineReducers({
   amount: amountReducer,
   primary: primaryReducer,
   secondary: secondaryReducer,
   isLoading: isLoadingReducer,
   history: historyReducer,
});

export default reducers;
