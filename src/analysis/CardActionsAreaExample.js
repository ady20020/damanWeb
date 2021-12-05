import React from "react";
// import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles({
  root: {
    maxWidth: 145,
    border: "2px solid #8c1247",
    textAlign: "center",
    minHeight: "140px",
  },
  faIcon: {
    fontSize: "50px",
    marginBottom: "10px",
  },
});

const CardClickable = (props) => {
  const classes = useStyles();
  const { title, description, icon, url } = props.data;

  return (
    <Link underline="none" component={RouterLink} to={url}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <i class={`fa ${icon} ${classes.faIcon}`} aria-hidden="true"></i>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};
export default CardClickable;
