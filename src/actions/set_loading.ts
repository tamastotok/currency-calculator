import { SET_IS_LOADING } from "../constants";

export const setIsLoading = (state: boolean) => {
   return {
      type: SET_IS_LOADING,
      payload: state,
   };
};
