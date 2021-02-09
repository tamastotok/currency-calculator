import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { setHistory } from "../../../actions/SetHistory";
import { useDispatch } from "react-redux";
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

const History = () => {
   const classes = useStyles();
   const [value, setValue] = React.useState(0);

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
                  onClick={() => dispatch(setHistory("1week"))}
               />
               <Tab
                  label="2w"
                  {...a11yProps(1)}
                  onClick={() => dispatch(setHistory("2weeks"))}
               />
               <Tab
                  label="1m"
                  {...a11yProps(2)}
                  onClick={() => dispatch(setHistory("1month"))}
               />
               <Tab
                  label="3m"
                  {...a11yProps(3)}
                  onClick={() => dispatch(setHistory("3months"))}
               />
               <Tab
                  label="6m"
                  {...a11yProps(4)}
                  onClick={() => dispatch(setHistory("6months"))}
               />
               <Tab
                  label="1y"
                  {...a11yProps(5)}
                  onClick={() => dispatch(setHistory("1year"))}
               />
               <Tab
                  label="All"
                  {...a11yProps(6)}
                  onClick={() => dispatch(setHistory("all"))}
               />
            </Tabs>
         </AppBar>
         <div className="chart-container">
            <Chart />
         </div>
      </div>
   );
};

export default History;
