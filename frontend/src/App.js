import React, { Component } from "react";
import NavTab from "./components/navtab";
import "./App.css";
import LoginPage from "./components/loginpage";

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
      { id: 1, name: "Bain & Co", type: "consulting", date: "25/jun/19" },
      {
        id: 2,
        name: "Facebook",
        type: "tech",
        date: "12/jun/19"
      },
      {
        id: 3,
        name: "Morgan Stanley",
        type: "finances",
        date: "13/jul/19"
      }
    ],
    calendarpaths: [
      { path: null },
      { path: null },
      { path: "./Bim2_1_4.jpg" },
      { path: "./Bim2_5_8.jpg" }
    ],
    personalinterest: "Tecnologia/Computação",
    profilephoto: null,
    beginApp: "0"
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  changeInterest = personalinterest => {
    this.setState({ personalinterest: personalinterest });
  };

  changePhoto = event => {
    if (event.target.files && event.target.files[0]) {
      this.setState({
        profilephoto: URL.createObjectURL(event.target.files[0])
      });
    }
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

  handlePage = evt => {
    const beginApp = 1;
    this.setState({ beginApp });
  };

  showPage = () => {
    if (this.state.beginApp === 1) {
      return (
        <NavTab
          counters={this.state.counters}
          calendarpaths={this.state.calendarpaths}
          empresas={this.state.empresas}
          profilephoto={this.state.profilephoto}
          onPhoto={this.changePhoto}
          personalinterest={this.state.personalinterest}
          onInterest={this.changeInterest}
        />
      );
    }
    return <LoginPage onPage={this.handlePage} />;
  };

  render() {
    return <React.Fragment>{this.showPage()}</React.Fragment>;
  }
}

export default App;
