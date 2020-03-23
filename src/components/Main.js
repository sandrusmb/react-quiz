import React from "react";
import "../stylesheets/Main.scss";
import QuestionList from "./QuestionList";
import Tool from "./Tool";

function Main(props) {
  return (
    <main className="main">
      <h1 className="main__title">Browse Questions</h1>
      <form className="main__form" onSubmit={props.getQuestions}>
        <input
          type="number"
          className="main__form-number"
          placeholder="Number of questions"
        ></input>
        <select className="main__form-type">
          <option value="">Any Type</option>
          <option value="multiple">Multiple Choice</option>
          <option value="boolean">True/False</option>
        </select>
        <select className="main__form-difficulty">
          <option value="">Any Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>

        <button className="main__form-btn">Search</button>
      </form>
      <table className="main__table">
        <thead>
          <tr className="main__table__bold">
            <th className="main__table__bold-item-id">
              ID
              <span className="main__table__bold-item-id-span">
                <i className="fas fa-sort-up"></i>
                <i className="fas fa-sort-down"></i>
              </span>
            </th>
            <th className="main__table__bold-item">Category</th>
            <th className="main__table__bold-item">Type</th>
            <th className="main__table__bold-item">Difficulty</th>
            <th className="main__table__bold-item">Question/ Statement</th>
            <th className="main__table__bold-item">Created By</th>
          </tr>
        </thead>
        <tbody className="table">
          <QuestionList questions={props.questions} />
        </tbody>
      </table>

      <Tool />
    </main>
  );
}

export default Main;
