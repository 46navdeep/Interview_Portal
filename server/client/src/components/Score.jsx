import React, { Component } from "react";
import Chip from "material-ui/Chip";
import { blue300 } from "material-ui/styles/colors";
import Paper from "material-ui/Paper";

class Score extends Component {
  render() {
    return (
      <div>
        <Chip backgroundColor={blue300} style={{ marginLeft: "45%" }}>
          SCORES
        </Chip>
        <br />
        <Paper
          style={{
            height: "400px",
            width: "900px",
            marginLeft: "23%",
            backgroundColor: "#99ecff"
          }}
          zDepth={3}
        />
      </div>
    );
  }
}
export default Score;
