import Amount from "./Amount";
import CurrencyType from "./CurrencyType";
import SearchButton from "./SearchButton";

export default function Exchange() {
   return (
      <div className="inputs">
         <CurrencyType index={1} />
         <CurrencyType index={2} />
         <Amount />
         <SearchButton />
      </div>
   );
}
