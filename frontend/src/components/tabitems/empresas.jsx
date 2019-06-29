import React, { Component } from "react";

class Empresas extends Component {
  state = {};
  getBadgeClasses(empresa) {
    let classes = "badge m-2 badge-";
    classes += empresa.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount(empresa) {
    const value = empresa.value;
    return value === 0 ? "Zero" : value;
  }
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
              <div>
                <h2>{empresa.name + ", em: " + empresa.date}</h2>
                <span className={this.getBadgeClasses(empresa)}>
                  {this.formatCount(empresa)}
                </span>
                <button
                  onClick={() => this.props.onIncrement(empresa)}
                  className="btn btn-secondary btn-sm"
                >
                  Increment
                </button>
                <button
                  onClick={() => this.props.onDecrement(empresa)}
                  className="btn btn-secondary btn-sm m-2"
                >
                  Decrement
                </button>
              </div>
            ))}
          </center>
        </h5>
      </div>
    );
  }
}

export default Empresas;
