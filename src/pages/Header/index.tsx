import React from "react";
import Amount from "./components/Amount";
import CurrencyType from "./components/CurrencyType";
import SearchButton from "./components/SearchButton";

const Exchange = () => {
   return (
      <div className="inputs">
         <CurrencyType index={1} />
         <CurrencyType index={2} />
         <Amount />
         <SearchButton />
      </div>
   );
};

export default Exchange;
