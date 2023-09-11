import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/questions')
      .then((response) => response.json())
       .then((data) => setQuestions(data))
  }, []);

  function handleUpdatedItem(updatedItem) {
    setQuestions([...questions, updatedItem])
  }

  function handleUpdatedDeletedItem(questionToDelete) {
    const updatedQuestions = questions.filter((question) => question.id !== questionToDelete.id);
    setQuestions(updatedQuestions);
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? 
      <QuestionForm onUpdate={handleUpdatedItem}/> : 
      <QuestionList questions={questions} onDelete={handleUpdatedDeletedItem}/>}
    </main>
  );
}

export default App;
 