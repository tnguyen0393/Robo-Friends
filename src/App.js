import React from "react";
import Cardlist from "./components/cardlist/cardlist.component";
import "tachyons";

import { robots } from "./robots";

class App extends React.Component {
  render() {
    return <Cardlist robots={robots} />;
  }
}

export default App;
