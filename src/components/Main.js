import React from "react";
import "../stylesheets/Main.scss";
import Tool from "./Tool";

function Main() {
  return (
    <main className="main">
      <h1 className="main__title">Browse Questions</h1>
      <table className="main__table">
        <tr className="main__table__bold">
          <td className="main__table__bold-item-id">
            ID
            <span className="main__table__bold-item-id-span">
              <i class="fas fa-sort-up"></i>
              <i class="fas fa-sort-down"></i>
            </span>
          </td>
          <td className="main__table__bold-item">Category</td>
          <td className="main__table__bold-item">Type</td>
          <td className="main__table__bold-item">Difficulty</td>
          <td className="main__table__bold-item">Question/ Statement</td>
          <td className="main__table__bold-item">Created By</td>
        </tr>
        <tr className="main__table__regular">
          <td className="main__table__regular-item">9493</td>
          <td className="main__table__regular-item">Science: Computers</td>
          <td className="main__table__regular-item">Multiple choice</td>
          <td className="main__table__regular-item">Easy</td>
          <td className="main__table__regular-question">
            What does the computer software acronym JVM stand for?
          </td>
          <td className="main__table__regular-author">Karen</td>
        </tr>
        <tr className="main__table__regular">
          <td className="main__table__regular-item">9493</td>
          <td className="main__table__regular-item">Science: Computers</td>
          <td className="main__table__regular-item">Multiple choice</td>
          <td className="main__table__regular-item">Easy</td>
          <td className="main__table__regular-question">
            What does the computer software acronym JVM stand for?
          </td>
          <td className="main__table__regular-author">Karen</td>
        </tr>
        <tr className="main__table__regular">
          <td className="main__table__regular-item">9493</td>
          <td className="main__table__regular-item">Science: Computers</td>
          <td className="main__table__regular-item">Multiple choice</td>
          <td className="main__table__regular-item">Easy</td>
          <td className="main__table__regular-question">
            What does the computer software acronym JVM stand for?
          </td>
          <td className="main__table__regular-author">Karen</td>
        </tr>
      </table>
      <Tool />
    </main>
  );
}

export default Main;
