import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Counter from "./counter";

class NavTab extends Component {
  render() {
    const {
      onReset,
      counters,
      onDelete,
      onIncrement,
      onDecrement
    } = this.props;
    return (
      <div>
        <img
          src={require("./LogoGrande.jpg")}
          alt=""
          height="150"
          width="210"
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
              <Counter
                key={counter.id}
                onDelete={onDelete}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
                counter={counter}
              />
            </TabPanel>
          ))}
        </Tabs>
      </div>
    );
  }
}

export default NavTab;
