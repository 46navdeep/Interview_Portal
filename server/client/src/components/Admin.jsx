import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import Divider from "material-ui/Divider";
import AdminBody from "./AdminBody";
import Score from "./Score";

class Admin extends Component {
  render() {
    return (
      <div>
        <AppBar title="Admin" />
        <AdminBody />
        <br />
        <br />
        <br />
        <br />
        <Divider />
        <br />
        <Score />
      </div>
    );
  }
}
export default Admin;
