import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { IconButton } from "@mui/material";
import { Row, Col } from "react-bootstrap";
import { AccountCircle, KeyboardArrowDown } from "@mui/icons-material";
// import  from "@mui/icons-material/KeyboardArrowDown";

const Dashboard = () => {
  return (
    <Box className="header">
      <Container>
        <Row style={{ margin: 0, display: "flex", alignItems: "center" }}>
          <Col md={4} xs={4}>
            <b>Dashboard</b>
          </Col>
          <Col md={8} xs={8} style={{ textAlign: "right" }}>
            <IconButton size="large" color="inherit">
              <AccountCircle />
              <KeyboardArrowDown />
            </IconButton>
          </Col>
        </Row>
      </Container>
    </Box>
  );
};

export { Dashboard };
