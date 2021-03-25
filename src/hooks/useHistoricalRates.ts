import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const useHistoricalRates = () => {
   const [result, setResult] = useState<{}>({});

   interface State {
      primaryCurrency: string;
      secondaryCurrency: string;
      currencyHistory: string;
   }

   const primaryCurrency = useSelector((state: State) => state.primaryCurrency);
   const secondaryCurrency = useSelector(
      (state: State) => state.secondaryCurrency
   );
   const currencyHistory = useSelector((state: State) => state.currencyHistory);

   // calculate start date for fetching data
   let startDate: string;
   const endDate: string = new Date().toISOString().split("T")[0];
   const d = new Date();

   switch (currencyHistory) {
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

   const fetchresult = async () => {
      if (primaryCurrency || secondaryCurrency) {
         try {
            const currency = await axios.get(
               `https://api.exchangeratesapi.io/history?start_at=${startDate}&end_at=${endDate}&base=${primaryCurrency}&symbols=${secondaryCurrency}`
            );

            setResult(currency.data.rates);
         } catch (error) {
            console.error(error);
         }
      }
   };

   useEffect(() => {
      if (currencyHistory) {
         fetchresult();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [currencyHistory, primaryCurrency, secondaryCurrency]);

   return result;
};
export default useHistoricalRates;
