import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

class Calendar extends Component {
  state = {};
  render() {
    const { calendarpaths } = this.props;
    return (
      <div>
        <h6>
          <Tabs>
            <TabList>
              <Tab>
                <div>1º Bimestre 2019</div>
              </Tab>
              <Tab>
                <div>2º Bimestre 2019</div>
              </Tab>
            </TabList>

            <TabPanel>
              {
                <h7>
                  <Tabs>
                    <TabList>
                      <Tab>
                        <div>
                          <li class="nav-item">
                            <a class="nav-link " href={"#"}>
                              1ª - 4ª semana
                            </a>
                          </li>
                        </div>
                      </Tab>
                      <Tab>
                        <div>
                          <li class="nav-item">
                            <a class="nav-link " href={"#"}>
                              5ª - 8ª semana
                            </a>
                          </li>
                        </div>
                      </Tab>
                    </TabList>

                    <TabPanel> {""}</TabPanel>

                    <TabPanel> {""}</TabPanel>
                  </Tabs>
                </h7>
              }
            </TabPanel>

            <TabPanel>
              {
                <Tabs>
                  <TabList>
                    <Tab>
                      <div>
                        <li class="nav-item">
                          <a class="nav-link " href={"#"}>
                            1ª - 4ª semana
                          </a>
                        </li>
                      </div>
                    </Tab>
                    <Tab>
                      <div>
                        <li class="nav-item">
                          <a class="nav-link " href={"#"}>
                            5ª - 8ª semana
                          </a>
                        </li>
                      </div>
                    </Tab>
                  </TabList>
                  <TabPanel>
                    {" "}
                    <center>
                      <img src={calendarpaths[2].path} alt="" class="center" />
                    </center>
                  </TabPanel>

                  <TabPanel>
                    {" "}
                    <center>
                      <img src={calendarpaths[3].path} alt="" class="center" />
                    </center>
                  </TabPanel>
                </Tabs>
              }
            </TabPanel>
          </Tabs>
        </h6>
      </div>
    );
  }
}

export default Calendar;
