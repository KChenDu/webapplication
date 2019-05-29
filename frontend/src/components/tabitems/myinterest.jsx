import React, { Component } from "react";

class PersonalInterests extends Component {
  state = {};
  render() {
    const { personalinterest } = this.props;
    return (
      <div>
        <h4>
          <center>{"Seu interesse é em " + personalinterest}</center>
        </h4>
      </div>
    );
  }
}

export default PersonalInterests;
