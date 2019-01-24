import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// const number1 = Math.floor(Math.random() * 100);
// const number2 = Math.floor(Math.random() * 100);
// const number3 = Math.floor(Math.random() * 100);
// const proposedAnswer = Math.floor(Math.random() * 3) + number1 + number2 + number3;

class App extends Component {
  constructor() {
    super();
    this.state = {
      number1: 0,
      number2: 0,
      number3: 0,
      proposedAnswer: 0,
      numQuestions: 0,
      numCorrect: 0
    };

    this.trueOnClicked = this.trueOnClicked.bind(this);
    this.falseOnClicked = this.falseOnClicked.bind(this);
    this.SetValue = this.SetValue.bind(this);
  }

  trueOnClicked() {
    console.log( true === (this.state.proposedAnswer ===
      this.state.number1 + this.state.number3 + this.state.number3));
    if (
      true === (this.state.proposedAnswer ===
      this.state.number1 + this.state.number3 + this.state.number3
    )) {
      this.setState(state => ({
        numCorrect: state.numCorrect + 1,
        numQuestions: state.numQuestions + 1
      }));

    } else {
      this.setState(state => ({ numQuestions: state.numQuestions + 1 }));
    }
  }

  falseOnClicked() {
    console.log(false ===  (this.state.proposedAnswer ===
      this.state.number1 + this.state.number3 + this.state.number3));
    if (
     false === (this.state.proposedAnswer ===
      this.state.number1 + this.state.number3 + this.state.number3)
    ) {
      this.setState(state => ({
        numCorrect: state.numCorrect + 1,
        numQuestions: state.numQuestions + 1
      }));

    } else {
      this.setState(state => ({ numQuestions: state.numQuestions + 1 }));
    }

  }

  SetValue() {
    this.setState(state => ({
      number1: 5,
      number2: 10,
      number3: 20
    }));

    this.setState(state => ({
      proposedAnswer:
        state.number1 +
        state.number2 +
        state.number3 
    }));
  }
  componentDidMount() {
    this.SetValue();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            React Bootcamp - Train the Trainer - Coding Practice
          </h1>
        </header>
        <div className="game">
          <h2>ADD THE NUMBERS GAME</h2>
          <div className="equation">
            <p className="textEquation">{`${this.state.number1} + ${
              this.state.number2
            } + ${this.state.number3} = ${this.state.proposedAnswer}`}</p>
          </div>
          <button onClick={this.trueOnClicked}>True</button>
          <button onClick={this.falseOnClicked}>False</button>
          <p className="text">
            You have answered {this.state.numCorrect} question answered
            correctly out of total {this.state.numQuestions} questions.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
