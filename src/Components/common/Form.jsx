import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import { Themes } from "../Themes";

// const Themes = {
//   colors: {
//     base1: "#1e464a !important",
//     base2: "#fff !important",
//     primary: "#0097a7 !important",
//     primary1: "#1e464a !important",
//   },
// };

const useStyles = makeStyles((theme) => ({
  cssLabel: {
    color: "#d3d3d3",
    "&.Mu-focused": {
      color: Themes.colors.primary,
    },
  },
  // Input props root
  cssOutlinedInput: {
    "&:not(hover):not($disabled):not($cssFocused):not($error) $notchedOutline":
      {
        borderColor: Themes.colors.base2, //default
        opacity: 0.5,
      },
    "&:hover:not($disabled):not($cssFocused):not($error) $notchedOutline": {
      opacity: 1,
      borderColor: Themes.colors.base2, // hovered #DCDCDC
    },
    "&$cssFocused $notchedOutline": {
      borderColor: Themes.colors.primary, //focused
      color: Themes.colors.primary,
    },
  },
  notchedOutline: {},
  cssFocused: {},
  error: {},
  disabled: {},
}));

export const RenderInputText = ({
  name,
  label,
  state,
  onChange,
  multiline,
  rows,
}) => {
  const { data, errors } = state;
  const classes = useStyles();
  return (
    <TextField
      InputLabelProps={{
        classes: {
          root: classes.cssLabel,
          focused: classes.cssFocused,
        },
      }}
      InputProps={{
        classes: {
          root: classes.cssOutlinedInput,
          focused: classes.cssFocused,
          notchedOutline: classes.notchedOutline,
        },
      }}
      variant="outlined"
      label={label}
      fullWidth={true}
      name={name}
      value={data[name]}
      error={errors[name] ? true : false}
      helperText={errors[name]}
      onChange={onChange}
      multiline={multiline}
      rows={rows}
    />
  );
};
