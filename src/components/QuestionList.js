import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem"
import QuestionForm from "./QuestionForm";


function QuestionList({questions, onDelete}) {
  

  
   
 

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => (
          <QuestionItem key={question.id} question={question} onDelete={onDelete}/>
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
