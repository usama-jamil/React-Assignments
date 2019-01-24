import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// const number1 = Math.floor(Math.random() * 100);
// const number2 = Math.floor(Math.random() * 100);
// const number3 = Math.floor(Math.random() * 100);
// const proposedAnswer = Math.floor(Math.random() * 3) + number1 + number2 + number3;

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
    // this.checkAnswer(true)
    this.checkAnswer(true);
  }
  // checkAnswer(usersAnswer) {
  //   const { number1, number2, number3, proposedAnswer } = this.state;
  //   const answer = (number1 + number2 + number3) === proposedAnswer;
  //   if (usersAnswer === answer) {
  //     this.setState(prevState => ({
  //       numQuestions: prevState.numQuestions+=1,
  //       numCorrect: prevState.numCorrect+=1
  //     }));
  //   }
  //   else {
  //     this.setState(prevState => ({
  //       numQuestions: prevState.numQuestions+=1
  //     }));
  //   }
  //   this.SetValue();
  // }
  checkAnswer(usersAnswer) {
    // console.log(this.state.number1 + this.state.number2 + this.state.number3)
    // console.log(this.state.proposedAnswer)
    // console.log(  (this.state.proposedAnswer ===
    //   this.state.number1 + this.state.number2 + this.state.number3));

    const { number1, number2, number3, proposedAnswer } = this.state;
    if (usersAnswer === (proposedAnswer === number1 + number2 + number3)) {
      this.setState(state => ({
        numCorrect: state.numCorrect + 1,
        numQuestions: state.numQuestions + 1
      }));
    } else {
      this.setState(state => ({ numQuestions: state.numQuestions + 1 }));
    }
  }
  falseOnClicked() {
    // this.checkAnswer(false);
    this.checkAnswer(false);
  }

  SetValue() {
    this.setState(state => ({
      number1: 5,
      number2: 10,
      number3: 20
    }));

    this.setState(state => ({
      proposedAnswer: state.number1 + state.number2 + state.number3
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
          <Equation number1={this.state.number1} number2 ={this.state.number2} number3={this.state.number3}
          proposedAnswer={this.state.proposedAnswer}></Equation>
 
 
          <button onClick={this.trueOnClicked}>True</button>
          <button onClick={this.falseOnClicked}>False</button>

          <ScoreBoard
            numCorrect={this.state.numCorrect}
            numQuestions={this.state.numQuestions}
          />

        </div>
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

const Equation = props => (<div className="equation">
<p className="textEquation">{`${props.number1} + ${
  props.number2
} + ${props.number3} = ${props.proposedAnswer}`}</p>
</div>)
export default App;
