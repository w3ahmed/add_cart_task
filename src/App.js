import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home  props={this.state}/>}/>
          </Routes>
        </BrowserRouter>
      </>
    )
  }

}

// function App() {
//  return(
//  )

// }

export default App;
