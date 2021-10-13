import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { setAmount } from "../../actions/set_amount";
import Input from "@mui/material/Input";
import { createStyles, makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "fit-content",
      "& > *": {
        margin: "8px",
        fontSize: 14,
        width: 160,
      },
    },
  })
);

export default function Amount() {
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
        sx={{ marginTop: 2, marginBottom: 4 }}
        placeholder="Amount"
        inputProps={{ "aria-label": "description" }}
        name="name"
        value={value}
        onChange={handleChange}
      />
    </form>
  );
}
