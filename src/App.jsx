import React from "react";
import {
  createSmartappDebugger,
  createAssistant,
} from "@salutejs/client";
//} from "@sberdevices/assistant-client";

import "./App.css";

import QuestionPage from "./pages/QuestionPage";
import GameOverPage from "./pages/GameOverPage";
import StartPage from "./pages/StartPage";
import HelpPage from "./pages/HelpPage";

const questions = [
  {
    countryImage: '/images/ca.png',
    answersOptions: [
      {
        answerNumber: 1, answersText: 'Великобритания', isCorrect: false
      },
      {
        answerNumber: 2, answersText: 'Россия', isCorrect: false
      },
      {
        answerNumber: 3, answersText: 'Канада', isCorrect: true
      },
      {
        answerNumber: 4, answersText: 'США', isCorrect: false
      }
    ],
  },
  {
    countryImage: '/images/ar.png',
    answersOptions: [
      {
        answerNumber: 1, answersText: 'Аргентина', isCorrect: true
      },
      {
        answerNumber: 2, answersText: 'Вьетнам', isCorrect: false
      },
      {
        answerNumber: 3, answersText: 'Мадаскар', isCorrect: false
      },
      {
        answerNumber: 4, answersText: 'Казахстан', isCorrect: false
      }
    ],
  },
  {
    countryImage: '/images/ru.png',
    answersOptions: [
      {
        answerNumber: 1, answersText: 'Кыргызстан', isCorrect: false
      },
      {
        answerNumber: 2, answersText: 'Россия', isCorrect: true
      },
      {
        answerNumber: 3, answersText: 'Мексика', isCorrect: false
      },
      {
        answerNumber: 4, answersText: 'Франция', isCorrect: false
      }
    ],
  }
]

const initializeAssistant = (getState/*: any*/) => {
  if (process.env.NODE_ENV === "development") {
    return createSmartappDebugger({
      token: process.env.REACT_APP_TOKEN ?? "",
      initPhrase: `Запусти ${process.env.REACT_APP_SMARTAPP}`,
      getState,
    });
  }
  return createAssistant({ getState });
};


export class App extends React.Component {
  state = {
    notes: [],
    currentQuestion: 0,
    score: 0,
    showScore: false
  }

  constructor(props) {
    super(props);
    console.log('constructor');
    this.handleOptionClick = this.handleOptionClick.bind(this);
    this.handleRestartClick = this.handleRestartClick.bind(this);
    this.handleStartGame = this.handleStartGame.bind(this);
    this.handleHelp = this.handleHelp.bind(this)

    this.state = {
      notes: [],
      currentQuestion: 0,
      score: 0,
      showScore: false,
      showGame: false,
      showHelp: false
    }

    this.assistant = initializeAssistant(() => this.getStateForAssistant());
    this.assistant.on("data", (event/*: any*/) => {
      console.log(`assistant.on(data)`, event);
      const { action } = event
      this.dispatchAssistantAction(action);
    });
    this.assistant.on("start", (event) => {
      console.log(`assistant.on(start)`, event);
    });

  }

  setCurrentQuestion = (number) => {
    this.setState = ({
      currentQuestion: number
    })
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  getStateForAssistant() {
    console.log('getStateForAssistant: this.state:', this.state)
    const state = {
      item_selector: {
        items: this.state.notes.map(
          ({ id, title }, index) => ({
            number: index + 1,
            id,
            title,
          })
        ),
      },
    };
    console.log('getStateForAssistant: state:', state)
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
    })
  }

  done_note(action) {
    console.log('done_note', action);
    this.setState({
      notes: this.state.notes.map((note) =>
        (note.id === action.id)
          ? { ...note, completed: !note.completed }
          : note
      ),
    })
  }

  delete_note(action) {
    console.log('delete_note', action);
    this.setState({
      notes: this.state.notes.filter(({ id }) => id !== action.id),
    })
  }


  handleOptionClick(isCorrect) {
    if (isCorrect) {
      this.setState({
        score: this.state.score + 1,
      })
    }

    const nextQuestion = this.state.currentQuestion + 1;

    if (nextQuestion < questions.length) {
      this.setState({
        currentQuestion: this.state.currentQuestion + 1
      });
    }
    else {
      this.setState({
        showScore: true
      })
    }
    console.log('click' + isCorrect)
  }

  handleRestartClick() {
    this.setState({
      currentQuestion: 0,
      showScore: false,
      score: 0
    })
  }

  handleStartGame() {
    this.setState({
      currentQuestion: 0,
      showScore: false,
      score: 0,
      showGame: true
    })
  }

  handleHelp() {
    this.setState({
      showHelp: !this.state.showHelp,
    })
  }
  render() {
    console.log('render');
    if (!this.state.showGame && !this.state.showHelp) {
      return <div className="wrapper">
        <StartPage handleStartGame={this.handleStartGame} handleHelp={this.handleHelp}></StartPage>
      </div>
    }

    if (this.state.showHelp) {
      return <div className="wrapper">
        <HelpPage handleHelp={this.handleHelp}></HelpPage>
      </div>
    }
    return (
      <>
        <div className="wrapper">
          {!this.state.showScore ?
            <QuestionPage currentQuestion={this.state.currentQuestion + 1} question={questions[this.state.currentQuestion]} score={this.state.score} handleOptionClick={this.handleOptionClick}></QuestionPage>
            :
            <GameOverPage score={this.state.score} handleRestartClick={this.handleRestartClick}></GameOverPage>
          }
        </div>
      </>
    )
  }


}
