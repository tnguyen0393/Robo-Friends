import React from "react";
import { connect } from "react-redux";
import Cardlist from "../components/cardlist/cardlist.component";
import SearchBox from "../components/searchbox/searchbox.component";
import Scroll from "../components/scroll/scroll.component";
import "./App.css";

import { setSearchField, requestRobots } from "../actions";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
  };
};

class App extends React.Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return isPending ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">RobotFriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <Cardlist robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
