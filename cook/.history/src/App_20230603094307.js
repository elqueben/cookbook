import './App.css';
import React, { useState } from 'react';

const Form = () => {
  return(
    <div>
      <form>
        <input type="text"></input>
        <textarea placeholder="describe the dish and list ingredients"></textarea>
        <input type="file"></input>
        <button>submit</button>
      </form>
    </div>
  )
}

function App() {
  
  const [item, setItem] = useState ([])
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null)

  const handleTitleChange = (e) => {
    e.
  }

  return (
    <>
      <Form />
    </>
  );
}

export default App;
