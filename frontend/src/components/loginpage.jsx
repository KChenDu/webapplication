/*import React, { Component } from "react";
import { Button } from "semantic-ui-react";

class LoginPage extends Component {
  state = {};
  render() {
    return (
      <Button class="ui button" onClick={() => this.props.onPage()}>
        Click Here
      </Button>
    );
  }
}

export default LoginPage;
*/
/*
import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";

export default class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <FormLabel>Email</FormLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <FormLabel>Password</FormLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            onClick={() => this.props.onPage()}
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}
*/
import React, { Component } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from "semantic-ui-react";
import Login1 from "./login1";
import Login2 from "./login2";

class Login extends Component {
  state = { login1: "1" };

  handlePage = evt => {
    const login1 = 1 - this.state.login1;
    //console.log(login1);
    this.setState({ login1 });
  };

  showPage = () => {
    if (this.state.login1 == 1) {
      return <Login1 onPage={this.handlePage} onLogin={this.props.onLogin} />;
    }
    return <Login2 onPage={this.handlePage} />;
  };

  render() {
    return <div>{this.showPage()}</div>;
  }
}

export default Login;
