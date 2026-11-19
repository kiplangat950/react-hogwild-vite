import React, { useState } from "react";

function HogForm({ onAddHog }) {
  const [name, setName] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [weight, setWeight] = useState("");
  const [greased, setGreased] = useState(false);
  const [medal, setMedal] = useState("wood");
  const imageState = useState("");
const image = imageState[0];
const setImage = imageState[1];



  function handleSubmit(e) {
    e.preventDefault();
    onAddHog({
      name,
      specialty,
      weight: parseFloat(weight),
      greased,
      "highest medal achieved": medal,
      image: image || "https://placeholder.com",
    });
    
    setName("");
    setSpecialty("");
    setWeight("");
    setGreased(false);
    setMedal("wood");
    setImage("");
  }

  return (
    <form className="ui form" style={{ margin: "20px" }} onSubmit={handleSubmit}>
      <h2>Add a New Hog</h2>
      <div className="fields">
        <div className="field">
          <label htmlFor="hog-name">Name:</label>
          <input
            id="hog-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="field">
          <label htmlFor="hog-specialty">Specialty:</label>
          <input
            id="hog-specialty"
            type="text"
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="hog-weight">Weight:</label>
          <input
            id="hog-weight"
            type="number"
            step="0.1"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="hog-medal">Highest Medal Achieved</label>
          <input
            id="hog-medal"
            type="text"
            value={medal}
            onChange={(e) => setMedal(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="hog-image">Image URL</label>
          <input
            id="hog-image"
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="hog-greased">Greased?</label>
          <input
            id="hog-greased"
            type="checkbox"
            checked={greased}
            onChange={(e) => setGreased(e.target.checked)}
          />
        </div>
      </div>
      <button className="ui primary button" type="submit">
        Add Hog
      </button>
    </form>
  );
}

export default HogForm;
