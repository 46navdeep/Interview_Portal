import React, { Component } from "react";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
// import FlatButton from 'material-ui/FlatButton';
import { Link } from "react-router";
// import Divider from 'material-ui/Divider';
import Dialog from "material-ui/Dialog";
//import $ from "jquery";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      mail: "",
      password: ""
    };
  }

  makeCall = (m, p) => {
    localStorage.setItem("email", m);
    localStorage.setItem("passwd", p);
    /*var parameter = {
      mail: this.state.mail,
      pass: this.state.password
    };
    $.ajax({
      url: "/login/trial",
      data: parameter,
      type: "POST"
    });*/
  };

  handleClick = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const actions = [
      <span style={{ width: "100px", height: "80px", backgroundColor: "grey" }}>
        <Link
          to={"/admin"}
          onClick={() => this.makeCall(this.state.mail, this.state.password)}
        >
          Login
        </Link>
      </span>
    ];

    return (
      <div style={{ marginLeft: "44%", marginTop: "20%" }}>
        <RaisedButton
          label="Login to admin"
          secondary={true}
          onClick={this.handleClick}
        />
        <Dialog
          title="Login with your G-mail credentials"
          titleStyle={{ marginLeft: "27%" }}
          open={this.state.open}
          actions={actions}
          onRequestClose={this.handleClose}
          modal={false}
        >
          <TextField
            hintText="Enter your email.."
            style={{ marginLeft: "33%" }}
            onChange={event => this.setState({ mail: event.target.value })}
          />
          <br />
          <TextField
            hintText="Password"
            type="password"
            style={{ marginLeft: "33%" }}
            onChange={event => this.setState({ password: event.target.value })}
          />
        </Dialog>
      </div>
    );
  }
}

export default Login;
