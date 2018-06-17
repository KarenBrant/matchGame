import React, { Component } from 'react';
import AnimalCard from './components/AnimalCard';
import animals from './components/animals.json'; 
import Title from "./components/Title";
import './App.css';
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";

let correctGuesses = 0;
let bestScore = 0;
let clickMessage = "Click on an image to earn points, but not the same one twice.";

class App extends Component {
  state = {
    animals,
    correctGuesses,
    bestScore,
    clickMessage
  };

setClicked = id => {
  const animals = this.state.animals;
  const clickedMatch = animals.filter(animal => animal.id === id);

  if (clickedMatch[0].clicked) {
    console.log ("Correct Guesses: " + correctGuesses);
    console.log ("Best Score: " + bestScore);

    correctGuesses = 0;
    clickMessage = "You already clicked on that one, so now you have to start over!";
  
    for (let i = 0; i < animals.length; i++) {
      animals[i].clicked = false;
    }

    this.setState({clickMessage});
    this.setState({correctGuesses});
    this.setState({animals});

  } else if (correctGuesses < 11) {
    clickedMatch[0].clicked = true;

    correctGuesses++;

    clickMessage = "Great! You haven't clicked on that one yet."; 
  
    if (correctGuesses > bestScore) {
      bestScore = correctGuesses;
      this.setState({ bestScore });
    }

    animals.sort(function(a, b) {return 0.5 - Math.random()});

    this.setState({animals});
    this.setState({correctGuesses});
    this.setState({clickMessage});

  } else {

    clickedMatch[0].clicked = true;

    correctGuesses = 0;

    clickMessage = "Wow, you got all of them!";
    bestScore = 12;
    this.setState ({ bestScore });

    for (let i = 0; i < animals.length; i++) {

      animals[i].clicked = false;
    }

    animals.sort(function(a,b) {return 0.5 - Math.random()});

    this.setState({ animals });
    this.setState({ correctGuesses });
    this.setState({ clickMessage });
  }
};

  render() {
    return (
      <Wrapper>
        <Navbar className="container">
          <p className="scoreSummary">
            Correct Guesses: {this.state.correctGuesses}
            <br />
            Best Score: {this.state.bestScore}
          </p>
        </Navbar>
        <Title>
          <h1 className="title">
            Clicky Game
          </h1>
          <p className="message">
            {this.state.clickMessage}
          </p>
        </Title>

      {this.state.animals.map(animal => (
        <AnimalCard
          setClicked={this.setClicked}
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
