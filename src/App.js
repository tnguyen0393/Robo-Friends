import React from "react";
import Cardlist from "./components/cardlist/cardlist.component";
import SearchBox from "./components/searchbox/searchbox.component";
import Scroll from "./components/scroll/scroll.component";
import ErrorBoundry from "./components/errorboundry/ErrorBoundry";
import "tachyons";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState({ robots: users });
      });
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

    if (this.state.robots.length === 0) {
      return <h1> Loading </h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f1">Robo Friends</h1>
          <SearchBox searchChange={this.onSearch} />
          <Scroll>
            <ErrorBoundry>
              <Cardlist robots={filteredRobot} />
            </ErrorBoundry>
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
