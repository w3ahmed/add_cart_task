import React from 'react';
import Home from "./pages/home";
import data from "./services/api";


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: data
    }
  }

  render() {
    return (
      <>
        <Home  props={this.state}/>
      </>
    )
  }

}

// function App() {
//  return(
//  )

// }

export default App;
