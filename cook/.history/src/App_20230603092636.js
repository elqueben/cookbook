import './App.css';
import React from 'react';

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
  
  return (
    <>
      <Form />
    </>
  );
}

export default App;
