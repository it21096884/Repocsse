import React, { useState } from "react";
import "./ConstructionForm.css"; // Import the CSS file

import { Link } from "@material-ui/core";
import Construction from "./Construction";
import ButterToast, { Cinnamon } from "butter-toast";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

const ConstructionForm = () => {
  const [formData, setFormData] = useState({
    date: "",
    location: "",

    budget: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    try {
      const response = await fetch("http://localhost:3500/Constructions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log(formData);

        ButterToast.raise({
          content: (
            <Cinnamon.Crisp
              title="Success!"
              content="Record added successfully!"
              scheme={Cinnamon.Crisp.SCHEME_GREEN}
              icon={<CheckCircleOutlineIcon />}
            />
          ),
        });
        // Optionally, you can redirect or update the UI as needed.
      } else {
        console.log("Error addeding Record");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="construction-form-container">
      <br></br>
      <h2 className="construction-form-header-add">Add Construction Record</h2>
      <form className="construction-form" onSubmit={handleSubmit}>
        <div>
          <label className="construction-label">Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="construction-input"
          />
        </div>
        <div>
          <label className="construction-label">Location:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="construction-input"
          />
        </div>

        <div>
          <label className="construction-label">Budget:</label>
          <input
            type="number"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="construction-input"
          />
        </div>
        <button type="submit" className="construction-button">
          Submit
        </button>
      </form>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default ConstructionForm;
