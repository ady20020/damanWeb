import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { IconButton, FormControl, NativeSelect, Slider } from "@mui/material";
import { Row, Col } from "react-bootstrap";
import { AccountCircle, KeyboardArrowDown, ArrowCircleLeftOutlined } from "@mui/icons-material";

const SelectFilterModule = () => {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="filterBox">
      <Container>
        <Row style={{ margin: 0, display: "flex", alignItems: "center" }}>
          <Col md={1} xs={12}>
            <IconButton size="large">
              <ArrowCircleLeftOutlined style={{ fontSize: "40px", color: "#fff" }} />
            </IconButton>
          </Col>
          <Col md={11} xs={12}>
            <h2>Selected Filters</h2>
            <Row>
              <Col md={8} xs={12}>
                <Row className="filterRow">
                  <Col md={3} xs={3}>
                    <p style={{ margin: 0 }}>Provided Type</p>
                    <p>Hospital</p>
                  </Col>
                  <Col md={3} xs={3}>
                    <p style={{ margin: 0 }}>Region</p>
                    <p>All</p>
                  </Col>
                  <Col md={3} xs={3}>
                    <p style={{ margin: 0 }}>Provided Size</p>
                    <p>Cardiology</p>
                  </Col>
                  <Col md={3} xs={3}>
                    <p style={{ margin: 0 }}>Admittance Status</p>
                    <FormControl fullWidth>
                      <NativeSelect
                        defaultValue={30}
                        inputProps={{
                          name: "admittanceStatus",
                          id: "filterSelect",
                        }}
                      >
                        <option value={"All"}>All</option>
                      </NativeSelect>
                    </FormControl>
                  </Col>
                </Row>
                <Row className="filterRow">
                  <Col md={3} xs={3}>
                    <p style={{ margin: 0 }}>Provided Group</p>
                    <p>All</p>
                  </Col>
                  <Col md={3} xs={3}>
                    <p style={{ margin: 0 }}>Major</p>
                    <p>Specialist Physician</p>
                  </Col>
                  <Col md={3} xs={3}>
                    <p style={{ margin: 0 }}>Nationality</p>
                    <FormControl fullWidth>
                      <NativeSelect
                        defaultValue={30}
                        inputProps={{
                          name: "admittanceStatus",
                          id: "filterSelect",
                        }}
                      >
                        <option value={"All"}>All</option>
                      </NativeSelect>
                    </FormControl>
                  </Col>
                  <Col md={3} xs={3}>
                    <p style={{ margin: 0 }}>Discharge Status</p>
                    <FormControl fullWidth>
                      <NativeSelect
                        defaultValue={30}
                        inputProps={{
                          name: "admittanceStatus",
                          id: "filterSelect",
                        }}
                      >
                        <option value={"All"}>All</option>
                      </NativeSelect>
                    </FormControl>
                  </Col>
                </Row>
                <Row className="filterRow">
                  <Col md={3} xs={3}>
                    <p style={{ margin: 0 }}>Provided Size</p>
                    <p>All</p>
                  </Col>
                  <Col md={3} xs={3}>
                    <p style={{ margin: 0 }}>Cost Block</p>
                    <p>Procedures</p>
                  </Col>
                  <Col md={3} xs={3}>
                    <p style={{ margin: 0 }}>Invoice Type</p>
                    <FormControl fullWidth>
                      <NativeSelect
                        defaultValue={30}
                        inputProps={{
                          name: "admittanceStatus",
                          id: "filterSelect",
                        }}
                      >
                        <option value={"All"}>All</option>
                      </NativeSelect>
                    </FormControl>
                  </Col>
                  <Col md={3} xs={3}></Col>
                </Row>
              </Col>
              <Col md={4} xs={4}>
                <Row className="filterRow">
                  <Col md={12} xs={12}>
                    <p>Age Group</p>
                    <Slider getAriaLabel={() => "Temperature range"} value={value} onChange={handleChange} valueLabelDisplay="auto" min={0} max={100} />
                  </Col>
                </Row>
                <Row className="filterRow">
                  <Col md={12} xs={12}>
                    <br />
                  </Col>
                </Row>
                <Row className="filterRow">
                  <Col md={12} xs={12}>
                    <p>Time Period</p>
                    <Row>
                      <Col md={5} xs={5}>
                        <FormControl fullWidth>
                          <NativeSelect
                            defaultValue={30}
                            inputProps={{
                              name: "admittanceStatus",
                              id: "filterSelect",
                            }}
                          >
                            <option value={"All"}>15th Mar' 2021</option>
                          </NativeSelect>
                        </FormControl>
                      </Col>
                      <Col md={2} xs={2}>
                        <p>To</p>
                      </Col>
                      <Col md={5} xs={5}>
                        <FormControl fullWidth>
                          <NativeSelect
                            defaultValue={30}
                            inputProps={{
                              name: "admittanceStatus",
                              id: "filterSelect",
                            }}
                          >
                            <option value={"All"}>15th Sep' 2021</option>
                          </NativeSelect>
                        </FormControl>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Box>
  );
};

export { SelectFilterModule };
