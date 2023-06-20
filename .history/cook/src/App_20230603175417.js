import './App.css';
import React, { useState } from 'react';

function App() {
  
  const [item, setItem] = useState ([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() !== "" && description.trim() !== "" && file !== null) {
      const newItem = {
        id: Date.now(),
        title: title,
        description: description,
        file: file
      };

      setItem([...item, newItem]);
      setTitle("");
      setDescription("");
      setFile(null);
    } else {
      alert("please fill in both title and description and submit a photo of the dish");
    }
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  }

  const handlePhotoChange = (e) => {
    const selectedPhoto = e.target.files[0];
    setFile((selectedPhoto));
  }

  return (
    <>
      <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleTitleChange} type="text"></input>
        <input type="file" accept="image/*"></input>
        <textarea onChange={handleDescriptionChange} placeholder="describe the dish and list ingredients"></textarea>
        <button>submit</button>
      </form>
      <div>
        <h1>items</h1>
        {}
      </div>
    </div>
    </>
  );
}

export default App;
