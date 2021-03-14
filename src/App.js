import { Component } from 'react';
import './App.css';
import React from 'react';
import Header from "./Components/Header/Header";
import Grid from "./Components/Grid/Grid";

/*
function timeout(ms){
  return new Promise(resolve => setTimeout(resolve,ms));
}
*/

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      isLoading: false,
      charatchers: []
    }
  }

  componentDidMount = () => {
    this.fetchCharacters();
  }


  fetchCharacters = async () => {

    try{
        this.setState({isLoading: true});
        const response = await fetch("https://rickandmortyapi.com/api/character/?page=1");
        const json = await response.json();
        this.setState({charatchers: json.results});
    }catch(e){
        console.log(e);
    }finally{
      this.setState({isLoading:false});
    }
  }


  render() {
    const {charatchers, isLoading} = this.state;
    return(
    <div className="App">
        <Header />
        <Grid charatchers = {charatchers} isLoading={isLoading} />
    </div>
    );
    }
}

export default App;
