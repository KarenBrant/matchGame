import React, { Component } from 'react';
import AnimalCard from './components/AnimalCard';
import animals from './components/animals.json'; 
import Title from "./components/Title";
import Instructions from "./components/Instructions";
import Navbar from "./components/Navbar";
import './App.css';

import Wrapper from "./components/Wrapper";

class App extends Component {
  state = {
    animals,
    isHidden: true
  };

toggleHidden () {
  this.setState({
    isHidden: !this.state.isHidden
  })
}

removeImg = id => {
  const animals = this.state.animals.filter (image => image.id !== id);
  this.setState({ animals });
};

  render() {
    return (
      <Wrapper>
        <Navbar></Navbar>
        <Title>Clicky Game</Title>
        <Instructions>Click on an image to earn points, but don't click on any more than once!</Instructions>
      {this.state.animals.map(animal => (
        <AnimalCard
          removeImg={this.removeImg}
          id={animal.id}
          key={animal.id}
          image={animal.image}
          />

      ))}
      </Wrapper>
      /* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div> */
    );
  }
}


export default App;
