import React, { Component } from "react";
import questions from "../database/questions";

class Questions extends Component {
  render() {
    console.log(questions.questions);
    const a = 2;
    return (
      <div>
        {questions.questions.map(quest => {
          return quest.id === "4" ? (
            <div key={quest.id}>{quest.ques}</div>
          ) : null;
        })}
      </div>
    );
  }
}

export default Questions;
