import React, { useState } from "react";
import CurrencyRatio from "./components/CurrencyRatio";
import History from "./components/History";
import ShowHistoryButton from "./components/ShowHistoryButton";

const Values = () => {
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
};

export default Values;
