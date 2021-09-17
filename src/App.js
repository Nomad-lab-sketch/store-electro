import React from "react";
import "./App.css";
import HeaderContainer from "./components/header/HeaderContainer";
import ContainerCollections from "./components/Collections/ContainerCollections";
import { Route } from "react-router";
import ContainerLaptops from "./components/Laptops/ContainerLaptops";

function App() {
  return (
    <div className="wrapper">
      <div className="container__header">
        <HeaderContainer />
      </div>
      <div className="App_header">
        <div className="App">
          <div className="Collection">

          </div>
        </div>
        <div>
          <Route path="/laptops" render={() => <ContainerLaptops />} />
        </div>
      </div>
    </div>
  );
}

export default App;
