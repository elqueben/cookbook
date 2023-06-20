import './App.css';
import React, { useState } from 'react';

const Form = () => {
  return(
    <div>
      <form>
        <input></input>
        <input></input>
        <input></input>
      </form>
    </div>
  )
}

function App() {
  
  const [title, setTitle] = useState("");
  const [description, setDescription]

  return (
    <>
      <Form />
    </>
  );
}

export default App;
