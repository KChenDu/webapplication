import React, { Component } from "react";
import NavTab from "./components/navtab";
import "./App.css";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      {
        id: 1,
        name: "Calendário"
      },
      {
        id: 2,
        name: "Próximos eventos"
      },
      { id: 3, name: "Empresas" },
      {
        id: 4,
        name: "Área do meu interesse"
      },
      { id: 5, name: "Meu perfil" }
    ],
    empresas: [
      { id: 1, name: "Bain & Co", date: "25/jun/19" },
      {
        id: 2,
        name: "Facebook",
        date: "12/jun/19"
      },
      {
        id: 3,
        name: "Morgan Stanley",
        date: "13/jul/19"
      }
    ]
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    //counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    //counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavTab
          counters={this.state.counters}
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
        />
        {/*}       <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
    </main>*/}
      </React.Fragment>
    );
  }
}

export default App;