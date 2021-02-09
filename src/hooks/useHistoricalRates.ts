import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const useHistoricalRates = () => {
   const [currencyHistory, setCurrencyHistory] = useState<{}>({});

   interface State {
      primary: string;
      secondary: string;
      history: string;
   }

   const primary = useSelector((state: State) => state.primary);
   const secondary = useSelector((state: State) => state.secondary);
   const history = useSelector((state: State) => state.history);

   // calculate start date for fetching data
   let startDate: string;
   const endDate: string = new Date().toISOString().split("T")[0];
   const d = new Date();

   switch (history) {
      case "1week":
         startDate = new Date(d.setDate(d.getDate() - 7))
            .toISOString()
            .split("T")[0];
         break;
      case "2weeks":
         startDate = new Date(d.setDate(d.getDate() - 14))
            .toISOString()
            .split("T")[0];
         break;
      case "1month":
         startDate = new Date(d.setMonth(-0)).toISOString().split("T")[0];
         break;
      case "3months":
         startDate = new Date(d.setMonth(-2)).toISOString().split("T")[0];
         break;
      case "6months":
         startDate = new Date(d.setMonth(-5)).toISOString().split("T")[0];
         break;
      case "1year":
         startDate = new Date(d.setMonth(-11)).toISOString().split("T")[0];
         break;
      case "all":
         startDate = "1999-01-01";
         break;
      default:
         startDate = new Date(d.setDate(d.getDate() - 7))
            .toISOString()
            .split("T")[0];
   }
   //-----

   const fetchCurrencyHistory = async () => {
      if (primary || secondary) {
         try {
            const currency = await axios.get(
               `https://api.exchangeratesapi.io/history?start_at=${startDate}&end_at=${endDate}&base=${primary}&symbols=${secondary}`
            );

            setCurrencyHistory(currency.data.rates);
         } catch (error) {
            console.error(error);
         }
      }
   };

   useEffect(() => {
      if (history) {
         fetchCurrencyHistory();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [history, primary, secondary]);

   return currencyHistory;
};
export default useHistoricalRates;
