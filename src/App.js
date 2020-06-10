import React from "react";
import Cardlist from "./components/cardlist/cardlist.component";
import SearchBox from "./components/searchbox/searchbox.component";
import "tachyons";

import { robots } from "./robots";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: "",
    };
  }

  onSearch = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredRobot = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    console.log(filteredRobot);
    return (
      <div className="tc">
        <h1>Robo Friends!</h1>
        <SearchBox searchChange={this.onSearch} />
        <Cardlist robots={filteredRobot} />
      </div>
    );
  }
}

export default App;
