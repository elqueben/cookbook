import './App.css';
import React, { useState } from 'react';

function App() {
  
  const [item, setItem] = useState ([])
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (title.trim() !== "" && description.trim() !)
  }

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value)
  }

  return (
    <>
      <div>
      <form>
        <input type="text"></input>
        <input type="file" accept="image/*"></input>
        <textarea placeholder="describe the dish and list ingredients"></textarea>
        <button>submit</button>
      </form>
    </div>
    </>
  );
}

export default App;
