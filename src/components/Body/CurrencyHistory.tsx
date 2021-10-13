import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrencyHistory } from "../../actions/currency_history";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Chart from "./Chart";

function a11yProps(index: any) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: "pink",
    margin: "20px 0",
    maxWidth: "670px",
  },
  button: {
    backgroundColor: "#90CAF9", //Blue
    //backgroundColor: "#F48FB1",  //Pink
    color: "black",
  },
  panel: {
    width: "100%",
    minHeight: "320px",
  },
}));

export default function CurrencyHistory() {
  const classes = useStyles();
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const dispatch = useDispatch();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          className={classes.button}
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab
            label="1w"
            {...a11yProps(0)}
            onClick={() => dispatch(setCurrencyHistory("1week"))}
          />
          <Tab
            label="2w"
            {...a11yProps(1)}
            onClick={() => dispatch(setCurrencyHistory("2weeks"))}
          />
          <Tab
            label="1m"
            {...a11yProps(2)}
            onClick={() => dispatch(setCurrencyHistory("1month"))}
          />
          <Tab
            label="3m"
            {...a11yProps(3)}
            onClick={() => dispatch(setCurrencyHistory("3months"))}
          />
          <Tab
            label="6m"
            {...a11yProps(4)}
            onClick={() => dispatch(setCurrencyHistory("6months"))}
          />
          <Tab
            label="1y"
            {...a11yProps(5)}
            onClick={() => dispatch(setCurrencyHistory("1year"))}
          />
          <Tab
            label="All"
            {...a11yProps(6)}
            onClick={() => dispatch(setCurrencyHistory("all"))}
          />
        </Tabs>
      </AppBar>
      <div className="chart-container">
        <Chart />
      </div>
    </div>
  );
}
