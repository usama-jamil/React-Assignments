import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";


class App extends Component {
  constructor(props) {
    super(props);
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
    this.checkAnswer = this.checkAnswer.bind(this);
    this.SetValue = this.SetValue.bind(this);
  }

  trueOnClicked() {
    this.checkAnswer(true);
  }
  falseOnClicked() {
    this.checkAnswer(false);
  }

  checkAnswer(usersAnswer) {

    const { number1, number2, number3, proposedAnswer } = this.state;
    
    if (usersAnswer === (proposedAnswer === number1 + number2 + number3)) {
      this.setState(state => ({
        numCorrect: state.numCorrect + 1,
        numQuestions: state.numQuestions + 1
      }));
    } else {
      this.setState(state => ({ numQuestions: state.numQuestions + 1 }));
    }
    this.SetValue();
  }

  SetValue() {
    this.setState(state => ({
      number1: Math.floor(Math.random() * 10),
      number2: Math.floor(Math.random() * 10),
      number3: Math.floor(Math.random() * 10)
    }));

    this.setState(state => ({
      proposedAnswer: Math.floor(Math.random() * 3) + state.number1 + state.number2 + state.number3
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

        <Equation
          number1={this.state.number1}
          number2={this.state.number2}
          number3={this.state.number3}
          proposedAnswer={this.state.proposedAnswer}
        />


        <Actions
          trueOnClicked={this.trueOnClicked}
          falseOnClicked={this.falseOnClicked}
        />

        <ScoreBoard
          numCorrect={this.state.numCorrect}
          numQuestions={this.state.numQuestions}
        />
      </div>
    );
  }
}

const ScoreBoard = props => (
  <p className="text">
    You have answered {props.numCorrect} question answered correctly out of
    total {props.numQuestions} questions.
  </p>
);

const Equation = props => (
  <div className="equation">
    <p className="textEquation">{`${props.number1} + ${props.number2} + ${
      props.number3
    } = ${props.proposedAnswer}`}</p>
  </div>
);

const Actions = props => (
  <div>
    <button onClick={props.trueOnClicked}>True</button>
    <button onClick={props.falseOnClicked}>False</button>
  </div>
);
export default App;
