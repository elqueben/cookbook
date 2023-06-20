import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  
  const [item, setItem] = useState ([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() !== "" && description.trim() !== "") {
      const newItem = {
        id: Date.now(),
        title: title,
        description: description,
        file: file
      };

      setItem([...item, newItem]);
      setTitle("");
      setDescription("");
      setFile("");
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

  console.log(item)

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input onChange={handleTitleChange} type="text" className="form-control" placeholder="Title" />
          </div>
          <div className="mb-3">
            <input onChange={handlePhotoChange} type="file" accept="image/*" className="form-control" />
          </div>
          <div>
            <</o>
          </div>
          <div>
            <p>prep time: <input></input>min <input></input>sec</p>
          </div>
          <div className="mb-3">
            <textarea onChange={handleDescriptionChange} className="form-control" placeholder="Describe the dish and list ingredients"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <div>
          <h1>Items</h1>
          {item.map((i) => (
            <div id={i.id} className="mb-3">
              <h3>{i.title}</h3>
              <p>{i.description}</p>
              {i.file && <img src={URL.createObjectURL(i.file)} alt="item" className="img-fluid" />}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
