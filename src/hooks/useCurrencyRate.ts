import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsLoading } from "../actions/SetIsLoading";
import axios from "axios";

const useCurrencyRate = () => {
   const dispatch = useDispatch();

   interface State {
      primary: string;
      secondary: string;
      amount: number;
      isLoading: boolean;
   }

   const primary = useSelector((state: State) => state.primary);
   const secondary = useSelector((state: State) => state.secondary);
   const amount = useSelector((state: State) => state.amount);
   const isLoading = useSelector((state: State) => state.isLoading);

   // exchange rate
   const [rate, setRate] = useState<number>(0);

   // exchange rate * amount
   const [result, setResult] = useState<string>("");

   // memory caching api data
   interface Cache {
      primary: string;
      secondary: string;
   }
   const cacheData = useRef<Cache>({
      primary: "",
      secondary: "",
   });
   //-----

   const getCurrencyRate = async () => {
      // in memory cache
      if (
         cacheData.current.primary === primary &&
         cacheData.current.secondary === secondary
      ) {
         setResult((rate * amount).toFixed(2));
         dispatch(setIsLoading(false));
         return;
      }
      //-----

      try {
         const currencyRate = await axios.get(
            `https://api.exchangeratesapi.io/latest?base=${primary}&symbols=${secondary}`
         );

         // cache
         cacheData.current.primary = currencyRate.data.base;
         cacheData.current.secondary = String(
            Object.keys(currencyRate.data.rates)
         );

         // set rate only when currencies are changed
         setRate(Number(Object.values(currencyRate.data.rates)));

         setResult(
            (Number(Object.values(currencyRate.data.rates)) * amount).toFixed(2)
         );
         dispatch(setIsLoading(false));
      } catch (error) {
         console.error(error);
      }
   };

   // render only when "search" clicked, and disappear when something change
   useEffect(() => {
      setResult("");
   }, [amount, primary, secondary]);

   // fetch data on "search" click
   useEffect(() => {
      if (isLoading) {
         getCurrencyRate();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [isLoading]);

   return result;
};
export default useCurrencyRate;
