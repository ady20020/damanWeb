import React from "react";

// import { styled, makeStyles } from "@material-ui/core/styles";
import { styled, makeStyles } from "@material-ui/core/styles";

import {
  Grid,
  Button,
  Paper,
  TextField,
  Checkbox,
  Select,
  MenuItem,
  Switch,
  RadioGroup,
  InputLabel,
  FormControl,
  FormControlLabel,
  ThemeProvider,
  Radio,
  createMuiTheme,
  Slider,
  styles,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    // padding: "4%",
    width: "20%",
    margin: "8px 20px 8px 0 !important",
    // boxShadow: "0 3px 10px rgb(0 0 0 / 20%)",
    // "& > *": {
    //   margin: theme.spacing(1),
    // },
  },
  select: {
    height: 32,
    minWidth: 120,
    // background: "red",
  },
}));

const CustomSelect = (props) => {
  const classes = useStyles();
  const { unique, label, options, defaultValue, handleChange } = props;
  return (
    <FormControl key={unique} className={classes.root}>
      <label>{label}</label>
      <Select labelId="demo-simple-select-label" id="demo-simple-select" value={defaultValue} label="Age" onChange={handleChange} className={classes.select}>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
};

export { CustomSelect };
