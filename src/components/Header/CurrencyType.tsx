import { useState } from "react";
import { useDispatch } from "react-redux";
import { setPrimaryCurrency } from "../../actions/primary_currency";
import { setSecondaryCurrency } from "../../actions/secondary_currency";
import { createStyles, makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import currencies from "../../data/currencies.json";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      display: "block",
      marginTop: 16,
    },
    formControl: {
      "& > *": {
        fontSize: 14,
      },
      margin: 8,
      minWidth: 120,
    },
    fontStyle: {
      fontSize: 14,
    },
  })
);

export default function CurrencyType({ index }: any) {
  const dispatch = useDispatch();

  // Material UI
  const classes = useStyles();
  const [name, setName] = useState<string>("");
  const [open, setOpen] = useState(false);

  const handleChange = (e: SelectChangeEvent) => {
    setName(e.target.value as string);

    // Save selected currency names in different redux states
    if (index === 1) {
      dispatch(setPrimaryCurrency(e.target.value as string));
    } else {
      dispatch(setSecondaryCurrency(e.target.value as string));
    }
  };
  // -----

  return (
    <div className="currency">
      <p>{index === 1 ? "from: " : "to: "}</p>
      <FormControl
        variant="standard"
        className={classes.formControl}
        sx={{ minWidth: 120, marginLeft: 5, marginBottom: 2 }}
      >
        <InputLabel id="demo-controlled-open-select-label">Currency</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          className={classes.fontStyle}
          open={open}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          value={name}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {Object.values(currencies).map((item: any, index) => {
            return (
              <MenuItem
                key={index}
                value={item.id}
                className={classes.fontStyle}
              >
                {`${item.id} ${item.name}`}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}
