import './App.css';
import React, { useState } from 'react';

const Form = () => {
  return(
    <div>
      <form>
        <label>
          <input type="text"></input>
        </label>
        <textarea type="text"></input>
        <input></input>
      </form>
    </div>
  )
}

function App() {
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null)

  return (
    <>
      <Form />
    </>
  );
}

export default App;
