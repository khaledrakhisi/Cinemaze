import React from "react";
import MicIcon from "@mui/icons-material/Mic";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";

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
        style: { height: "50px", marginRight: "10px" },
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
