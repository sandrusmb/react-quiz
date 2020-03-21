import React from "react";
import "../stylesheets/Main.scss";
import QuestionList from "./QuestionList";
import Tool from "./Tool";

function Main(props) {
  return (
    <main className="main">
      <h1 className="main__title">Browse Questions</h1>
      <button className="main__btn" onClick={props.getQuestions}>
        Search
      </button>
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
