import React from "react";
import { connect } from "react-redux";
import { IconButton, Container, Box } from "@mui/material";
import { Row, Col } from "react-bootstrap";
import { AccountCircle, KeyboardArrowDownIcon } from "@mui/icons-material";

const Header = () => {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      {/* Header */}
      <Box className="header">
        <Container>
          <Row style={{ margin: 0, display: "flex", alignItems: "center" }}>
            <Col md={4} xs={4}>
              <b>Dashboard</b>
            </Col>
            <Col md={8} xs={8} style={{ textAlign: "right" }}>
              <IconButton size="large" color="inherit">
                <AccountCircle />
                <KeyboardArrowDownIcon />
              </IconButton>
            </Col>
          </Row>
        </Container>
      </Box>
    </div>
  );
};

function mapState(state) {
  // const { users, authentication } = state;
  // const { user } = authentication;
  // return { user, users };
}

const actionCreators = {
  // getUsers: userActions.getAll,
  // deleteUser: userActions.delete,
};

const connectedHomePage = connect(mapState, actionCreators)(Header);
export { connectedHomePage as Header };
