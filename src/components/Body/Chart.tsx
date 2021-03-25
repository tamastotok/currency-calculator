import { useSelector } from "react-redux";
import { Line } from "react-chartjs-2";
import useHistoricalRates from "../../hooks/useHistoricalRates";

export default function Chart() {
   interface State {
      primaryCurrency: string;
      secondaryCurrency: string;
   }

   const primaryCurrency = useSelector((state: State) => state.primaryCurrency);
   const secondaryCurrency = useSelector(
      (state: State) => state.secondaryCurrency
   );

   const currencyHistory = useHistoricalRates();

   const values = Object.values(currencyHistory).map((item: any) => {
      return Number(Object.values(item));
   });

   const data = {
      labels: [...Object.keys(currencyHistory).sort()],

      datasets: [
         {
            label: `${primaryCurrency} / ${secondaryCurrency}`,
            fill: false,
            lineTension: 0.1,
            //backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)", //Graph color
            pointRadius: 1,
            data: [...values],
         },
      ],
   };

   const options = {
      maintainAspectRatio: false,
      scales: {
         xAxes: [
            {
               ticks: {
                  autoSkip: true,
               },
            },
         ],
      },
   };

   return <Line data={data} width={260} height={220} options={options} />;
}
