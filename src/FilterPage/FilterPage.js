import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Box from "@material-ui/core/Box";
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

import { userActions } from "../_actions";
import { CustomSelect } from "../commonComponent/CustomSelect";
// import CardActionsAreaExample from "./CardActionsAreaExample";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#ffffff !important",
    margin: "auto",
    padding: "4%",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  button: {
    backgroundColor: "#810040 !important",
    padding: "10px 45px !important",
    "&:disabled": {
      backgroundColor: theme.palette.primary || "red",
    },
  },
}));

const FilterPage = (props) => {
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const [selectedCategorias, setselectedCategorias] = useState("");

  useEffect(() => {
    props.getUsers();
  }, []);

  const handleDeleteUser = (id) => {
    return (e) => props.deleteUser(id);
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const nextPage = () => {
    props.history.push("/selectedFilter");
  };

  const { user, users } = props;

  const selectData = [
    {
      "Provider Filter": [
        {
          label: "Provider Type",
        },
        {
          label: "Provider Group",
        },
        {
          label: "Provider Size",
        },
        {
          label: "Region",
        },
        {
          label: "Major",
        },
        {
          label: "Speciality",
        },
        {
          label: "Cost Block",
        },
      ],
    },
    {
      "Member Filter": [
        {
          label: "Nationality",
        },
        {
          label: "Invoice Type",
        },
        {
          label: "Admittance Status",
        },
        {
          label: "Discharge Status",
        },
      ],
    },
    {
      "Analysis Filter": [
        {
          label: "Comparison Category",
        },
        {
          label: "Analysis Level",
        },
        {
          label: "Activity Codes",
        },
      ],
    },
  ];
  return (
    <form className={classes.root} onSubmit={nextPage}>
      <h2>Choose the filters for analysis</h2>
      <hr />
      {selectData.map((current, index) => {
        const [key, value] = Object.entries(current)[0];
        return (
          <React.Fragment key={index}>
            <h2 key={`h-${index}`}>{key}</h2>
            {value.map((c, i) => {
              const { label, options, defaultValue, handleChange } = c;
              return <CustomSelect unique={i} label={label} options={options} defaultValue={defaultValue} handleChange={handleChange} />;
            })}
          </React.Fragment>
        );
      })}
      <br />
      <br />
      <Button variant="contained" className={classes.button} type="submit">
        Apply Filters
      </Button>
    </form>
  );
};

function mapState(state) {
  const { users, authentication } = state;
  const { user } = authentication;
  return { user, users };
}

const actionCreators = {
  getUsers: userActions.getAll,
  deleteUser: userActions.delete,
};

const connectedHomePage = connect(mapState, actionCreators)(FilterPage);
export { connectedHomePage as FilterPage };
