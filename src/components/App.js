import React from "react";
import "../stylesheets/App.css";
import Menu from "./Menu";
import Main from "./Main";

class App extends React.Component {
  state = {
    questions: []
  };

  getQuestions = async ev => {
    ev.preventDefault();
    console.log(ev.target.elements[1].value);
    const numberOfQuestions = ev.target.elements[0].value;
    const difficultyValue = ev.target.elements[2].value;
    const typeValue = ev.target.elements[1].value;
    const api_call = await fetch(
      `https://opentdb.com/api.php?amount=${numberOfQuestions}&difficulty=${difficultyValue}&type=${typeValue}`
    );
    const data = await api_call.json();
    console.log(data.results);

    for (let i = 0; i < data.results.length; i++) {
      console.log(data.results[i]);
    }

    this.setState({
      questions: data.results
    });
  };
  render() {
    return (
      <div className="App">
        <Menu />
        <Main
          getQuestions={this.getQuestions}
          questions={this.state.questions}
        />
      </div>
    );
  }
}
export default App;
