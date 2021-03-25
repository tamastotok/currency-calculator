import { useSelector } from "react-redux";
import useCurrencyRate from "../../hooks/useCurrencyRate";

export default function CurrencyRatio() {
   const data = useCurrencyRate();

   interface State {
      primaryCurrency: string;
      secondaryCurrency: string;
      amount: number;
   }

   const primaryCurrency = useSelector((state: State) => state.primaryCurrency);
   const secondaryCurrency = useSelector(
      (state: State) => state.secondaryCurrency
   );
   const amount = useSelector((state: State) => state.amount);

   return (
      <div className="ratio">
         {data
            ? `${amount} ${primaryCurrency} = ${data} ${secondaryCurrency}`
            : null}
      </div>
   );
}
