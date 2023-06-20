import React, { useState } from 'react';

const Form = () => {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (title.trim() !== '' && description.trim() !== '') {
      const newItem = {
        id: Date.now(),
        title: title,
        description: description,
        photo: photo
      };

      setItems([...items, newItem]);
      setTitle('');
      setDescription('');
      setPhoto(null);
    } else {
      alert('Please fill in both title and description fields.');
    }
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handlePhotoChange = (event) => {
    const selectedPhoto = event.target.files[0];
    setPhoto(selectedPhoto);
  };

  return (
    <div>
      <h2>Add Item</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={handleTitleChange} />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={handleDescriptionChange} />
        </div>
        <div>
          <label>Photo:</label>
          <input type="file" accept="image/*" onChange={handlePhotoChange} />
        </div>
        <button type="submit">Submit</button>
      </form>

      <h2>Items</h2>
      {items.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          {item.photo && <img src={URL.createObjectURL(item.photo)} alt="Item" />}
        </div>
      ))}
    </div>
  );
};

export default Form;
