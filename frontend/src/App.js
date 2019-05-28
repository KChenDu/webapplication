import React, { Component } from "react";
import NavTab from "./components/navtab";
import "./App.css";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      {
        id: 1,
        value: 0,
        name: "IBOV",
        datapath: "data/example3.csv"
      },
      {
        id: 2,
        value: 0,
        name: "PETR3",
        datapath: "data/example30.csv"
      },
      { id: 3, value: 0, name: "CNTO3", datapath: "data/example32.csv" },
      { id: 4, value: 0, name: "HGTX3", datapath: "data/example33.csv" }
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
