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
} from "@material-ui/core";

import { userActions } from "../_actions";
import CardActionsAreaExample from "./CardActionsAreaExample";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#ffffff !important",
    margin: "auto",
    padding: "5%",
    boxShadow: "0 3px 10px rgb(0 0 0 / 20%)",
    // "& > *": {
    //   margin: theme.spacing(1),
    // },
  },
}));

const Analysis = (props) => {
  const classes = useStyles();

  useEffect(() => {
    props.getUsers();
  }, []);

  const handleDeleteUser = (id) => {
    return (e) => props.deleteUser(id);
  };

  const { user, users } = props;

  const cardsData = [
    {
      title: "Trend Based Analysis",
      icon: "fa-handshake-o",
      url: "/filter",
      description: "",
    },
    {
      title: "Collusion Detection",
      icon: "fa-bar-chart",
      url: "/filter",
      description: "",
    },
    {
      title: "False Coding",
      icon: "fa-bar-chart",
      url: "/filter",
      description: "",
    },
  ];
  return (
    <div className="parentBody">
      <Grid container justifyContent="center" direction="column" item md={8} className={classes.root}>
        {/* <div className=" white-bg mt-4"> */}
        <h2 className="main-color display-3">welcome</h2>
        <p className="lead">Please choose the type of analysis</p>
        <Grid container item xs={6} md={12} spacing={2} style={{ display: "flex", justifyContent: "flex-start" }} className="mt-3">
          {cardsData.map((current, i) => (
            <Grid item xs={6} md={4} key={i}>
              <CardActionsAreaExample data={current} />
            </Grid>
          ))}
        </Grid>
        <p className="mt-4">
          <Link to="/login">Logout</Link>
        </p>
        {/* </div> */}
      </Grid>
    </div>
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

const connectedHomePage = connect(mapState, actionCreators)(Analysis);
export { connectedHomePage as Analysis };
