import React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { makeStyles } from "@mui/styles";
import MicIcon from "@mui/icons-material/Mic";
import { IconButton } from "@mui/material";

const useStyles = makeStyles({
  input: {
    height: "50px",
  },
});

export interface IInputSearchProps {
  id: string;
  label: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  type: string;
  value: string;
  name: string;
  required?: boolean;
}

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
      InputProps={{
        style: { height: "50px" },
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
