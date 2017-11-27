import React, { Component } from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import $ from "jquery";

class AdminBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      student: ""
    };
  }

  handleClick = () => {
    var parameter = {
      mail: localStorage.getItem("email"),
      pass: localStorage.getItem("passwd"),
      stud: this.state.student
    };
    $.ajax({
      url: "/admin/home",
      data: parameter,
      type: "POST"
    });
  };

  checkString = () => {
    const { mail } = this.state;
    var c1 = 0;
    var c2 = 0;
    var i;
    for (i = 0; i < mail.length; i++) {
      if (mail[i] === "@") ++c1;
      if (mail[i] === ".") ++c2;
    }

    const { student } = this.state;
    var c3 = 0;
    var c4 = 0;
    var j;
    for (j = 0; j < student.length; j++) {
      if (student[j] === "@") ++c3;
      if (student[j] === ".") ++c4;
    }
    if (c1 === 1 && c2 >= 1 && c3 === 1 && c4 >= 1);
    else {
      window.alert("Please enter a vilid e-mail address");
    }
  };

  render() {
    //console.log(localStorage.getItem("email"));
    //console.log(localStorage.getItem("passwd"));
    return (
      <div style={{ marginLeft: "30%", marginTop: "5%" }}>
        <TextField
          hintText="Enter Interviewee e-mail address"
          style={{ marginLeft: "16%" }}
          onChange={event => this.setState({ student: event.target.value })}
        />
        <RaisedButton
          label="Send"
          primary={true}
          style={{ marginLeft: "10px" }}
          onClick={this.handleClick}
        />
      </div>
    );
  }
}
export default AdminBody;
