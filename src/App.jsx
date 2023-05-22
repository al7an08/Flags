import React from "react";
import { flagsData, getRandomQuestionIndex, resetUsedFlagIndexes} from './flagsData';
import { createSmartappDebugger, createAssistant } from "@salutejs/client";
import "./App.css";
import QuestionPage from "./pages/QuestionPage";
import GameOverPage from "./pages/GameOverPage";
import StartPage from "./pages/StartPage";
import HelpPage from "./pages/HelpPage";
import MenuPage from "./pages/MenuPage";

const initializeAssistant = (getState) => {
  if (process.env.NODE_ENV === "development") {
    return createSmartappDebugger({ token: process.env.REACT_APP_TOKEN ?? "", initPhrase: `Запусти ${process.env.REACT_APP_SMARTAPP}`, getState });
  }

  return createAssistant({ getState });
};

export class App extends React.Component {
  state = {
    notes: [],
    currentQuestionIndex: 0,
    score: 0,
    showScore: false,
    showGame: false,
    showHelp: false
  };

  constructor(props) {
    super(props);

    this.handleOptionClick = this.handleOptionClick.bind(this);
    this.handleRestartClick = this.handleRestartClick.bind(this);
    this.handleStartGame = this.handleStartGame.bind(this);
    this.handleHelp = this.handleHelp.bind(this);
    this.handleNumOfQuestionsChange = this.handleNumOfQuestionsChange.bind(this);
    this.handleShowMenu = this.handleShowMenu.bind(this);

    this.state = {
      notes: [],
      currentQuestionIndex: 0,
      score: 0,
      numOfQuestions: 10,
      showScore: false,
      showGame: false,
      showHelp: false,
      showMenu: false
    };

    this.assistant = initializeAssistant(() => this.getStateForAssistant());

    this.assistant.on("data", (event) => {
      console.log(`assistant.on(data)`, event);
      const { action } = event;
      this.dispatchAssistantAction(action);
    });

    this.assistant.on("start", (event) => {
      console.log(`assistant.on(start)`, event);
    });
  }

  setCurrentQuestion = (number) => {
    this.setState({ currentQuestion: number });
  };

  componentDidMount() {
    console.log('componentDidMount');
  }

  getStateForAssistant() {
    console.log('getStateForAssistant: this.state:', this.state);
    const currentQuestion = flagsData[this.state.currentQuestionIndex];
    const state = { answer_selector: { answers: currentQuestion.options } };
    console.log('getStateForAssistant: state:', state);
    return state;
  }

  dispatchAssistantAction(action) {
    console.log('dispatchAssistantAction', action);
    if (action) {
      switch (action.type) {
        case 'add_note':
          return this.add_note(action);
        case 'done_note':
          return this.done_note(action);
        case 'delete_note':
          return this.delete_note(action);
        default:
          throw new Error();
      }
    }
  }

  add_note(action) {
    console.log('add_note', action);
    this.setState({
      notes: [
        ...this.state.notes,
        {
          id: Math.random().toString(36).substring(7),
          title: action.note,
          completed: false,
        },
      ],
    });
  }

  done_note(action) {
    console.log('done_note', action);
    this.setState({
      notes: this.state.notes.map((note) =>
        note.id === action.id
          ? { ...note, completed: !note.completed }
          : note
      ),
    });
  }

  delete_note(action) {
    console.log('delete_note', action);
    this.setState({
      notes: this.state.notes.filter(({ id }) => id !== action.id),
    });
  }

  handleOptionClick(isCorrect) {

    setTimeout(() => {
      if (isCorrect) {
        this.setState({
          score: this.state.score + 1,
        });
      }
      const nextQuestionIndex = this.state.currentQuestionIndex + 1;

      if (nextQuestionIndex < this.state.numOfQuestions) {
        this.setState({
          currentQuestionIndex: nextQuestionIndex,
        });
      } else {
        this.setState({
          showScore: true,
        });
      }

      console.log('click' + isCorrect);
    }, 3000)
  }

  handleRestartClick() {
    resetUsedFlagIndexes()
    this.setState({
      currentQuestionIndex: 0,
      showScore: false,
      score: 0,
      showGame: false,
      showMenu: true,
    });
  }

  handleStartGame() {
    resetUsedFlagIndexes()
    this.setState({
      currentQuestionIndex: 0,
      showScore: false,
      showMenu: false,
      score: 0,
      showGame: true,
    });
  }

  handleShowMenu() {
    this.setState({
      showMenu: true,
    })
    console.log(this.state.showMenu)
  }

  handleNumOfQuestionsChange(num) {
    if (num >= 5 && num <= 100) {
      this.setState({
        numOfQuestions: num
      })
    }
  }

  handleHelp() {
    this.setState({
      showHelp: !this.state.showHelp,
      showMenu: false,
    });
  }

  render() {
    console.log('render');

    if (!this.state.showGame && !this.state.showHelp && !this.state.showMenu) {
      return (
        <div className="wrapper">
          <StartPage handleStartGame={this.handleShowMenu} handleHelp={this.handleHelp} />
        </div>
      );
    }

    if (this.state.showMenu && !this.state.showHelp) {
      return (
        <div className="wrapper">
          <MenuPage setNumOfQuestions={this.handleNumOfQuestionsChange} handleStartGame={this.handleStartGame} numOfQuestions={this.state.numOfQuestions} />
        </div>
      );
    }

    if (this.state.showHelp && !this.state.showMenu) {
      return (
        <div className="wrapper">
          <HelpPage handleHelp={this.handleHelp} />
        </div>
      );
    }

    const currentQuestion = flagsData[getRandomQuestionIndex()];

    return (
      <>
        <div className="wrapper">
          {!this.state.showScore ? (
            <QuestionPage
              currentQuestion={this.state.currentQuestionIndex + 1}
              question={currentQuestion}
              score={this.state.score}
              handleOptionClick={this.handleOptionClick}
            />
          ) : (
            <GameOverPage score={this.state.score} handleRestartClick={this.handleRestartClick} />
          )}
        </div>
      </>
    );
  }
}
