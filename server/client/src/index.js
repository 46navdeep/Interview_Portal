import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import injectTapEventPlugin from "react-tap-event-plugin";
import Admin from "./components/Admin";

injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider>
    <Admin />
  </MuiThemeProvider>,
  document.getElementById("root")
);
