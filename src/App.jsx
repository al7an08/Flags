import React from "react";
import { flagsData, getRandomQuestionIndex, resetUsedFlagIndexes } from './flagsData';
import { createSmartappDebugger, createAssistant } from "@salutejs/client";
import "./App.css";
import QuestionPage from "./pages/QuestionPage";
import GameOverPage from "./pages/GameOverPage";
import StartPage from "./pages/StartPage";
import HelpPage from "./pages/HelpPage";
import MenuPage from "./pages/MenuPage";
import { act } from "react-dom/test-utils";

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

    this.help = this.help.bind(this);
    this.choose_amount = this.choose_amount.bind(this);
    this.start_game = this.start_game.bind(this);
    this.handleOptionClick = this.handleOptionClick.bind(this);
    this.handleRestartClick = this.handleRestartClick.bind(this);
    this.handleStartGame = this.handleStartGame.bind(this);
    this.handleHelp = this.handleHelp.bind(this);
    this.handleNumOfQuestionsChange = this.handleNumOfQuestionsChange.bind(this);
    this.handleShowMenu = this.handleShowMenu.bind(this);
    this.handleStartPage = this.handleStartPage.bind(this);

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
        case 'start_game':
          return this.start_game(action);
        case 'start_quiz':
          return this.start_quiz(action)
        case 'help':
          return this.help(action);
        case 'main_menu':
          return this.main_menu(action);
        case 'choose_amount':
          return this.handleNumOfQuestionsChange(action.note);
        default:
          throw new Error();
      }
    }
  }

  _send_action(action_id, value) {
    const data = {
      action: {
        action_id: action_id,
        parameters: {   
          value: value, 
        }
      }
    };
    const unsubscribe = this.assistant.sendData(
      data,
      (data) => {  
        const {type, payload} = data;
        console.log('sendData onData:', type, payload);
        unsubscribe();
      });
    }

  choose_amount(action) {
    console.log('choose_amount', action)

    console.log("choose_amount  ")
    this.handleNumOfQuestionsChange(parseInt(action.note));

    // console.log(action.number)
  }

  main_menu(action) {
    console.log('main_menu', action)

    this.handleStartPage(action);
  }


  start_quiz(action) {
    console.log('start_quiz', action)

    this.handleStartGame(action);
  }


  start_game(action) {
    console.log('start_game', action);

    this.handleShowMenu(action);

  }

  choose_answer(action) {
    console.log('choose_answer', action);


  }

  help(action) {
    console.log('help', action);

    this.handleHelp(action);
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
      showHelp: false,
      score: 0,
      showGame: true,
    });
  }

  handleShowMenu(action) {
    this._send_action('shMenu_action', {'note':action.note} );
    this.setState({
      showMenu: true,
    })
    console.log(this.state.showMenu)
  }

  handleStartPage(action) {
    this._send_action('startPage_action', {'note':action.note} );
    this.setState({
      currentQuestionIndex: 0,
      showScore: false,
      showMenu: false,
      showHelp: false,
      showGame: false,
      score: 0,
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

  handleHelp(action) {
    console.log('help');
    this._send_action('help_action', {'note':action.note} );
    this.setState({
      showHelp: true,
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
          <MenuPage setNumOfQuestions={this.handleNumOfQuestionsChange} handleStartPage={this.handleStartPage} handleStartGame={this.handleStartGame} numOfQuestions={this.state.numOfQuestions} />
        </div>
      );
    }

    if (this.state.showHelp && !this.state.showMenu) {
      return (
        <div className="wrapper">
          <HelpPage handleHelp={this.handleHelp} handleStartPage={this.handleStartPage}/>
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
