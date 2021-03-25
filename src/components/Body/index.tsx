import { useState } from "react";
import CurrencyRatio from "./CurrencyRatio";
import History from "./CurrencyHistory";
import ShowHistoryButton from "./ShowHistoryButton";

export default function Values() {
   const [isClicked, setIsClicked] = useState<boolean>(false);

   const showHistory = () => {
      setIsClicked((prevState) => !prevState);
   };

   return (
      <div>
         <CurrencyRatio />
         <ShowHistoryButton showHistory={showHistory} isClicked={isClicked} />
         {isClicked ? <History /> : null}
      </div>
   );
}
