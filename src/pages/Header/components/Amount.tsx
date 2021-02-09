import React, { ChangeEvent, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import { useDispatch } from "react-redux";
import { setAmount } from "../../../actions/SetAmount";

const useStyles = makeStyles((theme: Theme) =>
   createStyles({
      root: {
         "& > *": {
            margin: theme.spacing(1),
            fontSize: 14,
            width: 80,
         },
      },
   })
);

const Amount = () => {
   const dispatch = useDispatch();

   // Material UI
   const classes = useStyles();
   const [value, setValue] = useState<string>("");

   const handleChange = (e: ChangeEvent<{ value: string }>) => {
      setValue(e.target.value as string);

      // Store value in redux
      let formatValue: number = 0;
      if (e.target.value.includes(",")) {
         formatValue = parseFloat(e.target.value.replace(",", "."));
      } else {
         formatValue = parseFloat(e.target.value);
      }

      dispatch(setAmount(formatValue));
   };

   return (
      <form className={classes.root} noValidate autoComplete="off">
         <Input
            placeholder="Amount"
            inputProps={{ "aria-label": "description" }}
            name="name"
            value={value}
            onChange={handleChange}
         />
      </form>
   );
};

export default Amount;
