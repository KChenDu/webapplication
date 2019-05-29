import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Counter from "./counter";
import Calendar from "./tabitems/calendar";
import Events from "./tabitems/nextevents";
import Empresas from "./tabitems/empresas";
import PersonalInterests from "./tabitems/myinterest";
import Profile from "./tabitems/profile";

class NavTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: []
    };
  }
  tabdecision = (counter, calendarpaths, personalinterest, onInterest) => {
    if (counter.name == "Calendário")
      return <Calendar calendarpaths={calendarpaths} />;
    else if (counter.name == "Próximos eventos") return <Events />;
    else if (counter.name == "Empresas") return <Empresas />;
    else if (counter.name == "Área do meu interesse")
      return <PersonalInterests personalinterest={personalinterest} />;
    else if (counter.name == "Meu perfil")
      return <Profile onInterest={onInterest} />;
  };

  render() {
    const {
      counters,
      calendarpaths,
      personalinterest,
      onInterest
    } = this.props;
    return (
      <div>
        <img
          src={require("./CEEAPP.jpg")}
          alt=""
          height="53"
          width="150"
          align="right"
        />
        <Tabs>
          <TabList>
            {counters.map(counter => (
              <Tab>
                <div>
                  <li class="nav-item">
                    <a class="nav-link " href={"#"}>
                      {counter.name}
                    </a>
                  </li>
                </div>
              </Tab>
            ))}
          </TabList>
          {counters.map(counter => (
            <TabPanel>
              {this.tabdecision(
                counter,
                calendarpaths,
                personalinterest,
                onInterest
              )}
            </TabPanel>
          ))}
        </Tabs>
      </div>
    );
  }
}

export default NavTab;
