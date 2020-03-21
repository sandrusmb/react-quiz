import React from "react";
import "../stylesheets/QuestionList.scss";
import "../stylesheets/Main.scss";

function QuestionList(props) {
  return (
    <React.Fragment>
      {props.questions.map(question => {
        return (
          <tr className="table__container">
            <td className="table__container-item">9493</td>
            <td className="table__container-item">{question.category}</td>
            <td className="table__container-item">{question.type}</td>
            <td className="table__container-item">{question.difficulty}</td>
            <td className="table__container-question">{question.question}</td>
            <td className="table__container-author">Karen</td>
          </tr>
        );
      })}
    </React.Fragment>
  );
}

export default QuestionList;
