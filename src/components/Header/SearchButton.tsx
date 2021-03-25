import { useDispatch, useSelector } from "react-redux";
import { setIsLoading } from "../../actions/set_loading";
import Button from "@material-ui/core/Button";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
   createStyles({
      root: {
         "& > *": {
            margin: theme.spacing(1),
         },
      },
      button: {
         backgroundColor: "#90CAF9", //Blue
         //backgroundColor: "#F48FB1",  //Pink
         "&:hover": {
            backgroundColor: "#70B0E3", //Darker-Blue
         },
      },
   })
);

export default function SearchButton() {
   const classes = useStyles();
   const dispatch = useDispatch();

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

   const handleClick = () => {
      if (!primaryCurrency || !secondaryCurrency) {
         window.alert("Select a currency!");
         return;
      } else if (primaryCurrency === secondaryCurrency) {
         window.alert("Select a different currency!");
      } else if (amount === 0) {
         window.alert("Amount is empty!");
      } else {
         dispatch(setIsLoading(true));
      }
   };

   return (
      <div className={classes.root}>
         <Button
            variant="contained"
            className={classes.button}
            onClick={handleClick}
         >
            Search
         </Button>
      </div>
   );
}
