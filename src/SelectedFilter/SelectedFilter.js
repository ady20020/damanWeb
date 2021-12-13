import React from "react";
import { connect } from "react-redux";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { IconButton } from "@mui/material";
import { Row, Col } from "react-bootstrap";
import AccountCircle from "@mui/icons-material/AccountCircle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Chart from "react-google-charts";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import Slider from "@mui/material/Slider";

import "./SelectedFilter.css";
import { Dashboard, SelectFilterModule } from "../commonModule";

const SelectedFilter = () => {
  const data = [
    [{ type: "date", label: "" }, "Clinicians 1", "Reference", ""],
    [new Date(2021, 0), 0, 5.7, 4],
    [new Date(2021, 1), 0.4, 8.7, 6],
    [new Date(2021, 2), 0.5, 12, 10],
    [new Date(2021, 3), 2.9, 15.3, 13],
    [new Date(2021, 4), 6.3, 18.6, 14],
    [new Date(2021, 5), 9, 20.9, 17],
    [new Date(2021, 6), 10.6, 19.8, 9],
    [new Date(2021, 7), 10.3, 16.6, 7],
    [new Date(2021, 8), 7.4, 13.3, 10],
    [new Date(2021, 9), 4.4, 9.9, 7],
    [new Date(2021, 10), 1.1, 6.6, 5],
    [new Date(2021, 11), 0, 4.5, 2],
  ];

  return (
    <div>
      {/* Header */}
      <Dashboard />

      {/* Filter */}
      <SelectFilterModule />

      {/* Main content */}
      <Box className="mainContent">
        <Container>
          <Row sx={{ width: "calc(100% - 50px)", margin: "0 auto" }}>
            <Col md={2} xs={2} sx={{ padding: "0 30px 0 0" }}>
              <h4 style={{ margin: 0 }}>
                <IconButton>
                  <KeyboardBackspaceIcon />
                </IconButton>{" "}
                Clinicians
              </h4>
              <button className="btn sideBtn active">Clinician 1</button>
              <button className="btn sideBtn">Clinician 2</button>
              <button className="btn sideBtn active">Clinician 3</button>
              <button className="btn sideBtn">Clinician 4</button>
              <button className="btn sideBtn">Clinician 5</button>
              <button className="btn sideBtn">Clinician 6</button>
            </Col>
            <Col md={10} xs={10} sx={{ padding: 0 }}>
              <div className="chartBox">
                <Chart
                  width={"100%"}
                  height={"400px"}
                  chartType="Line"
                  loader={<div>Loading Chart</div>}
                  data={data}
                  options={{
                    chart: {
                      title: "Selected Activity: Lipid Profile",
                    },
                    series: {
                      // Gives each series an axis name that matches the Y-axis below.
                      0: { axis: "Temps" },
                      1: { curveType: "function" },
                    },
                    axes: {
                      // Adds labels to each axis; they don't have to match the axis names.
                      y: {
                        Temps: { label: "Rate of prescribing" },
                      },
                    },
                    colors: ["#99294F", "#1B157B", "#FDE3E4"],
                  }}
                  rootProps={{ "data-testid": "4" }}
                />
              </div>
              <br />
              <Row sx={{ margin: "0", width: "100%" }}>
                <Col md={6} xs={6}>
                  <div className="chartBox">
                    <Chart
                      width={"100%"}
                      height={"400px"}
                      chartType="ScatterChart"
                      loader={<div>Loading Chart</div>}
                      data={[
                        ["Claimed Amount", "Clinician 1", "Clinician 2"],
                        [0, 0, 67],
                        [1, 40, 88],
                        [2, 16, 77],
                        [3, 26, 93],
                        [4, 59, 85],
                        [5, 70, 91],
                        [6, 103, 71],
                      ]}
                      options={{
                        colors: ["#99294F", "#1B157B", "#FDE3E4"],
                        hAxis: {
                          title: "Claimed Amount",
                          gridlines: {
                            color: "transparent",
                          },
                          textPosition: "none",
                        },
                        vAxis: {
                          title: "Number of claims",
                          textPosition: "none",
                        },
                        legend: "none",
                      }}
                      rootProps={{ "data-testid": "3" }}
                    />
                  </div>
                </Col>
                <Col md={6} xs={6}>
                  <div className="chartBox">
                    <Chart
                      width={"100%"}
                      height={"400px"}
                      chartType="ColumnChart"
                      loader={<div>Loading Chart</div>}
                      data={[
                        ["Year", "Clinician 1", { role: "style" }],
                        ["2014", 1000, "#FDE3E4"],
                        ["2015", 1170, "#FDE3E4"],
                        ["2016", 1200, "#99294F"],
                        ["2017", 1030, "#FDE3E4"],
                        ["2017", 1100, "#1B157B"],
                        ["2017", 1230, "#FDE3E4"],
                      ]}
                      options={{
                        legend: "none",
                        colors: ["#99294F", "#1B157B", "#FDE3E4"],
                        hAxis: {
                          textPosition: "none",
                          title: "Clinicians",
                        },
                        vAxis: {
                          title: "Rate of prescribing",
                          textPosition: "none",
                        },
                      }}
                      // For tests
                      rootProps={{ "data-testid": "2" }}
                    />
                  </div>
                </Col>
              </Row>
              <br />
              <Row sx={{ margin: "0", width: "100%" }}>
                <Col md={6} xs={6}>
                  <div className="chartBox">
                    <Chart
                      width={"100%"}
                      height={"400px"}
                      chartType="BubbleChart"
                      loader={<div>Loading Chart</div>}
                      data={[
                        ["ID", "Activity", "Clinician 1"],
                        ["Act-1", 80.66, 1.67],
                        ["Act-2", 30.84, 2.36],
                        ["Act-3", 50.6, 3.84],
                        ["Act-4", 40.73, 4.78],
                        ["Act-5", 20.05, 2],
                        ["Act-6", 60.49, 1.7],
                        ["Act-7", 60.49, 2.7],
                        ["Act-8", 60.49, 1.7],
                      ]}
                      options={{
                        hAxis: {
                          title: "Top 8 activities prescribed by clinician 1",
                          textPosition: "none",
                        },
                        vAxis: {
                          title: "",
                          textPosition: "none",
                        },
                        bubble: { textStyle: { fontSize: 11 } },
                        legend: "none",
                        colors: ["#99294F", "#1B157B", "#FDE3E4"],
                      }}
                      rootProps={{ "data-testid": "1" }}
                    />
                  </div>
                </Col>
                <Col md={6} xs={6}>
                  <div className="chartBox">
                    <Chart
                      width={"100%"}
                      height={"400px"}
                      chartType="ScatterChart"
                      loader={<div>Loading Chart</div>}
                      data={[
                        ["Claimed Amount", "Clinician 1", "Clinician 2"],
                        [0, 0, 67],
                        [1, 40, 88],
                        [2, 16, 77],
                        [3, 26, 93],
                        [4, 59, 85],
                        [5, 70, 91],
                        [6, 103, 71],
                      ]}
                      options={{
                        colors: ["#99294F", "#1B157B", "#FDE3E4"],
                        hAxis: {
                          title: "Total visit per patient",
                          gridlines: {
                            color: "transparent",
                          },
                          textPosition: "none",
                        },
                        vAxis: {
                          title: "Patient risk score",
                          textPosition: "none",
                        },
                        legend: "none",
                      }}
                      rootProps={{ "data-testid": "3" }}
                    />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Box>
    </div>
  );
};

function mapState(state) {
  const { users, authentication } = state;
  const { user } = authentication;
  return { user, users };
}

const actionCreators = {
  // getUsers: userActions.getAll,
  // deleteUser: userActions.delete,
};

const connectedHomePage = connect(mapState, actionCreators)(SelectedFilter);
export { connectedHomePage as SelectedFilter };

export default { SelectedFilter };
