import './App.css';
import React, { useState } from 'react';

const Form = () => {
  return(
    <div>
      <form>
        <label>
          <input type="text"></input>
        </label>
        <textarea></textarea>
        <input></input>
      </form>
    </div>
  )
}

function App() {
  
  const [item, set]
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
