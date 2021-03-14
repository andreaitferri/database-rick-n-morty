import { Component } from 'react';
import './App.css';
import React from 'react';
import Header from "./Components/Header/Header";
import Grid from "./Components/Grid/Grid";
import Character from "./Components/Card/Character";

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      charatchers: [Character]
    }
  }


  render() {
    return(
    <div className="App">
        <Header />
        <Grid charatchers = {this.state.charatchers} />
    </div>
    );
    }
}

export default App;
