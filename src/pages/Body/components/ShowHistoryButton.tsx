import { useDispatch, useSelector } from "react-redux";
import { setHistory } from "../../../actions/SetHistory";
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

interface Props {
   showHistory(): any;
   isClicked: boolean;
}

const ShowHistoryButton = (props: Props) => {
   const classes = useStyles();

   const { showHistory, isClicked } = props;

   const dispatch = useDispatch();
   const history = useSelector((state: { history: string }) => state.history);

   const handleClick = () => {
      if (!history) {
         dispatch(setHistory("1week"));
      }
      showHistory();
   };

   return (
      <div className={classes.root}>
         <Button
            variant="contained"
            className={classes.button}
            onClick={handleClick}
         >
            {!isClicked ? "Show Chart" : "Hide Chart"}
         </Button>
      </div>
   );
};
export default ShowHistoryButton;
