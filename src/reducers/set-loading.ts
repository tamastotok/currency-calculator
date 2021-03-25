import { SET_IS_LOADING } from "../constants";

interface IsLoadingType {
   type: string;
   payload: boolean;
}

const isLoadingReducer = (state: boolean = false, action: IsLoadingType) => {
   switch (action.type) {
      case SET_IS_LOADING:
         return action.payload;
      default:
         return state;
   }
};
export default isLoadingReducer;
