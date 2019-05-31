import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
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
  tabdecision = (
    counter,
    calendarpaths,
    personalinterest,
    onInterest,
    profilephoto,
    onPhoto,
    empresas
  ) => {
    if (counter.name == "Calendário")
      return <Calendar calendarpaths={calendarpaths} />;
    else if (counter.name == "Próximos eventos") return <Events />;
    else if (counter.name == "Empresas")
      return <Empresas empresas={empresas} />;
    else if (counter.name == "Área do meu interesse")
      return (
        <PersonalInterests
          personalinterest={personalinterest}
          empresas={empresas}
        />
      );
    else if (counter.name == "Meu perfil")
      return (
        <Profile
          personalinterest={personalinterest}
          onInterest={onInterest}
          profilephoto={profilephoto}
          onPhoto={onPhoto}
        />
      );
  };

  render() {
    const {
      counters,
      calendarpaths,
      personalinterest,
      onInterest,
      profilephoto,
      onPhoto,
      empresas
    } = this.props;
    return (
      <div>
        <img
          src={require("./CEEAPP.jpg")}
          alt=""
          height="53"
          width="200"
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
                onInterest,
                profilephoto,
                onPhoto,
                empresas
              )}
            </TabPanel>
          ))}
        </Tabs>
      </div>
    );
  }
}

export default NavTab;
