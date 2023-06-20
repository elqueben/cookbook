import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ""

function App() {
  const [item, setItem] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [servingSize, setServingSize] = useState('');
  const [prepTime, setPrepTime] = useState('');
  const [cookTime, setCookTime] = useState('');
  const [showForm, setShowForm] = useState(false); // Track form visibility

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      title.trim() !== '' &&
      description.trim() !== '' &&
      file !== null &&
      servingSize !== '' &&
      prepTime !== '' &&
      cookTime !== ''
    ) {
      const newItem = {
        id: Date.now(),
        title: title,
        description: description,
        file: file,
        servingSize: servingSize,
        prepTime: prepTime,
        cookTime: cookTime,
      };

      setItem([...item, newItem]);
      setTitle('');
      setDescription('');
      setFile(null);
      setServingSize('');
      setPrepTime('');
      setCookTime('');
    } else {
      alert('Please fill in all the required fields.');
    }
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handlePhotoChange = (e) => {
    const selectedPhoto = e.target.files[0];
    setFile(selectedPhoto);
  };

  const handleServingSizeChange = (e) => {
    setServingSize(e.target.value);
  };

  const handlePrepTimeChange = (e) => {
    setPrepTime(e.target.value);
  };

  const handleCookTimeChange = (e) => {
    setCookTime(e.target.value);
  };

  const toggleFormVisibility = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <div className="text-center p-3">
        <h1>Cook Book</h1>
        <p>add your favorite dishes' recipe! be specific in the ingredients and measurements so that everyone can get a taste of your dish.</p>
      </div>
      <div className="container">
        <button className="btn btn-primary mb-3" onClick={toggleFormVisibility}>
          {showForm ? 'Hide Form' : 'Add New Recipe'}
        </button>
        {showForm && (
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                onChange={handleTitleChange}
                type="text"
                className="form-control"
                placeholder="Title"
                value={title}
              />
            </div>
            <div className="mb-3">
              <input
                type="file"
                accept="image/*"
                className="form-control"
                onChange={handlePhotoChange}
              />
            </div>
            <div className="mb-3">
              <textarea
                onChange={handleDescriptionChange}
                className="form-control"
                placeholder="Describe the dish and list ingredients"
                value={description}
              ></textarea>
            </div>
            <div className="mb-3">
              <label className="form-label">Serving Size</label>
              <input
                type="number"
                className="form-control"
                onChange={handleServingSizeChange}
                value={servingSize}
              />
            </div>
            <div className="row mb-3">
              <div className="col">
                <label className="form-label">Prep Time (minutes)</label>
                <input
                  type="number"
                  className="form-control"
                  onChange={handlePrepTimeChange}
                  value={prepTime}
                />
              </div>
              <div className="col">
                <label className="form-label">Cook Time (minutes)</label>
                <input
                  type="number"
                  className="form-control"
                  onChange={handleCookTimeChange}
                  value={cookTime}
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        )}
        <div>
          <h1>Items</h1>
          {item.map((i) => (
            <div key={i.id} className="mb-3 text-center">
              <h3>{i.title}</h3>
              <div className="position-relative">
                <p>
                  Serving Size: {i.servingSize} | Prep Time: {i.prepTime} minutes | Cook Time: {i.cookTime} minutes
                </p>
              </div>
              <p>{i.description}</p>
              {i.file && <img src={URL.createObjectURL(i.file)} alt="item"  />}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
