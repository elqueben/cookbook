import './App.css';
import React, { useState } from 'react';

const Form = () => {
  return(
    <div>
      <form>
        <label>
          <input type="text"></input>
        </label>
        <textarea placehoder="describe the dish"></textarea>
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

  return (
    <>
      <Form />
    </>
  );
}

export default App;
