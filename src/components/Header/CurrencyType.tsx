import { useState, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { setPrimaryCurrency } from "../../actions/primary_currency";
import { setSecondaryCurrency } from "../../actions/secondary_currency";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import currencies from "../../data/currencies.json";

const useStyles = makeStyles((theme: Theme) =>
   createStyles({
      button: {
         display: "block",
         marginTop: theme.spacing(2),
      },
      formControl: {
         "& > *": {
            fontSize: 14,
         },
         margin: theme.spacing(1),
         minWidth: 80,
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

   const handleChange = (e: ChangeEvent<{ value: unknown }>) => {
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
         <FormControl className={classes.formControl}>
            <InputLabel id="demo-controlled-open-select-label">
               Currency
            </InputLabel>
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
