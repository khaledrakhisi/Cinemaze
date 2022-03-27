import React from "react";
import MicIcon from "@mui/icons-material/Mic";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";

export interface IInputSearchProps {
  id: string;
  label: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  type: string;
  value: string;
  name: string;
  required?: boolean;
}

const useStyles = makeStyles({
  textbox: {
    borderColor: "#fff",
  },
});

const InputSearch: React.FunctionComponent<IInputSearchProps> = (props) => {
  const classes = useStyles();
  return (
    <TextField
      id={props.id}
      placeholder={props.label}
      value={props.value}
      onChange={props.onChange}
      type={props.type}
      name={props.name}
      required={props.required}
      className={classes.textbox}
      InputProps={{
        style: { height: "40px", marginRight: "10px" },
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton>
              <MicIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      variant="outlined"
    />
  );
};

export default InputSearch;
