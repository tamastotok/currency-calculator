import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsLoading } from "../actions/set_loading";
import axios from "axios";

const useCurrencyRate = () => {
  const dispatch = useDispatch();

  interface State {
    primaryCurrency: string;
    secondaryCurrency: string;
    amount: number;
    isLoading: boolean;
  }

  const primaryCurrency = useSelector((state: State) => state.primaryCurrency);
  const secondaryCurrency = useSelector(
    (state: State) => state.secondaryCurrency
  );
  const amount = useSelector((state: State) => state.amount);
  const isLoading = useSelector((state: State) => state.isLoading);

  // exchange rate
  const [rate, setRate] = useState<number>(0);

  // exchange rate * amount
  const [result, setResult] = useState<string>("");

  // memory caching api data
  interface Cache {
    primaryCurrency: string;
    secondaryCurrency: string;
  }
  const cacheData = useRef<Cache>({
    primaryCurrency: "",
    secondaryCurrency: "",
  });
  //-----

  const getCurrencyRate = async () => {
    // in memory cache
    if (
      cacheData.current.primaryCurrency === primaryCurrency &&
      cacheData.current.secondaryCurrency === secondaryCurrency
    ) {
      setResult((rate * amount).toFixed(2));
      dispatch(setIsLoading(false));
      return;
    }
    //-----

    try {
      const currencyRate = await axios.get(
        `https://api.exchangerate.host/latest?base=${primaryCurrency}&symbols=${secondaryCurrency}`
      );

      // cache
      cacheData.current.primaryCurrency = currencyRate.data.base;
      cacheData.current.secondaryCurrency = String(
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
  }, [amount, primaryCurrency, secondaryCurrency]);

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
