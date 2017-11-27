import React, { Component } from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import $ from "jquery";

class AdminBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: "",
      password: "",
      student: ""
    };
  }

  handleClick = () => {
    var parameter = {
      email: this.state.mail,
      pass: this.state.password,
      stud: this.state.student
    };
    $.ajax({
      url: "/home",
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
    console.log(this.state.mail);
    console.log(this.state.student);

    return (
      <div style={{ marginLeft: "30%", marginTop: "5%" }}>
        <TextField
          hintText="Enter your e-mail address"
          style={{ marginLeft: "10px" }}
          onChange={event => this.setState({ mail: event.target.value })}
        />
        <TextField
          hintText="Enter your password"
          type="password"
          style={{ marginLeft: "10px" }}
          onChange={event => this.setState({ password: event.target.value })}
        />
        <TextField
          hintText="Enter Interviewee e-mail address"
          style={{ marginLeft: "10px" }}
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
