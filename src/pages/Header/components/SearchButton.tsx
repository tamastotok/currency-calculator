import { useDispatch, useSelector } from "react-redux";
import { setIsLoading } from "../../../actions/SetIsLoading";
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

const SearchButton = () => {
   const classes = useStyles();
   const dispatch = useDispatch();

   interface State {
      primary: string;
      secondary: string;
      amount: number;
   }

   const primary = useSelector((state: State) => state.primary);
   const secondary = useSelector((state: State) => state.secondary);
   const amount = useSelector((state: State) => state.amount);

   const handleClick = () => {
      if (!primary || !secondary) {
         window.alert("Select a currency!");
         return;
      } else if (primary === secondary) {
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
};
export default SearchButton;
