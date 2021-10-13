import { useDispatch, useSelector } from "react-redux";
import { setCurrencyHistory } from "../../actions/currency_history";
import { createStyles, makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";
import Button from "@mui/material/Button";

const useStyles: any = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: "8px",
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

export default function ShowHistoryButton(props: Props) {
  const classes = useStyles();

  const { showHistory, isClicked } = props;

  const dispatch = useDispatch();
  const history = useSelector((state: { history: string }) => state.history);

  const handleClick = () => {
    if (!history) {
      dispatch(setCurrencyHistory("1week"));
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
}
