import React from "react";

function QuestionItem({question, onDelete}) {
  const { id, prompt, answers, correctIndex } = question;

  function handleDeleteClick() {
    console.log(question.id)
    fetch(`http://localhost:4000/questions/${question.id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => handleDeletedQuestions(question.id))
  }

  function handleDeletedQuestions(id) {
    onDelete(question)
  }
  
  return (
    <li>
      <h4>Question </h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
         <select> 
          {answers && Array.isArray(answers) ? (
            answers.map((answer, index) => (
              <option key={index} value={index}>
                {answer}
              </option>
            ))
          ) : (
            <option value="0">No answer availiable</option>
          )}
        </select>
      </label>
      <button onClick={handleDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;


