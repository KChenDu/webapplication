import React, { Component } from "react";

class Empresas extends Component {
  state = {};
  render() {
    const { empresas } = this.props;
    return (
      <div>
        <h4>
          <center>{"Você está nas empresas"}</center>
        </h4>
        <h5>
          <center>
            {empresas.map(empresa => (
              <h2>{empresa.name + ", em: " + empresa.date}</h2>
            ))}
          </center>
        </h5>
      </div>
    );
  }
}

export default Empresas;
