import React, { Component } from "react";

const mapEmpresas = {
  tech: "Tecnologia/Computação",
  finances: "Mercado Financeiro",
  consulting: "Consultoria",
  industry: "Indústria",
  education: "Educação"
};

class PersonalInterests extends Component {
  state = {};

  decisionEmpresa = (empresa, personalinterest) => {
    if (mapEmpresas[empresa.type] == personalinterest)
      return <h2>{empresa.name + ", " + empresa.date}</h2>;
  };

  render() {
    const { personalinterest, empresas } = this.props;
    return (
      <div>
        <h4>
          <center>{"Seu interesse é em " + personalinterest}</center>
        </h4>
        <h5>
          <center>
            {empresas.map(empresa =>
              this.decisionEmpresa(empresa, personalinterest)
            )}
          </center>
        </h5>
      </div>
    );
  }
}

export default PersonalInterests;
