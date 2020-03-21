import React from "react";

function QuestionList(props) {
  return (
    <div>
      {props.questions.map(question => {
        return (
          <tbody>
            <tr className="main__table__regular">
              <td className="main__table__regular-item">9493</td>
              <td className="main__table__regular-item">{question.category}</td>
              <td className="main__table__regular-item">{question.type}</td>
              <td className="main__table__regular-item">
                {question.difficulty}
              </td>
              <td className="main__table__regular-question">
                {question.question}
              </td>
              <td className="main__table__regular-author">Karen</td>
            </tr>
          </tbody>
        );
      })}
    </div>
  );
}

export default QuestionList;
