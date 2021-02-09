import { useSelector } from "react-redux";
import useCurrencyRate from "../../../hooks/useCurrencyRate";

const CurrencyRatio = () => {
   const data = useCurrencyRate();

   interface State {
      primary: string;
      secondary: string;
      amount: number;
   }

   const primary = useSelector((state: State) => state.primary);
   const secondary = useSelector((state: State) => state.secondary);
   const amount = useSelector((state: State) => state.amount);

   return (
      <div className="ratio">
         {data ? `${amount} ${primary} = ${data} ${secondary}` : null}
      </div>
   );
};

export default CurrencyRatio;
