// const ConstructionForm = () => {
//   const [formData, setFormData] = useState({
//     date: "",
//     location: "",
//     supplier: "",
//     budget: 0,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:3500/Constructions", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         console.log("Record added successfully");
//         // Optionally, you can redirect or update the UI as needed.
//       } else {
//         console.error("Error adding record");
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="construction-form-container">
//       <h2 className="construction-form-header">Add Site Records</h2>
//       <form className="construction-form" onSubmit={handleSubmit}>
//         <div>
//           <label className="construction-label">Order No :</label>
//           <input
//             type="text"
//             name="ordNo"
//             // value={formData.no}
//             // onChange={handleChange}
//             className="construction-input"
//           />
//         </div>
//         <div>
//           <label className="construction-label">quantity:</label>
//           <input
//             type="text"
//             name="location"
//             // value={formData.location}
//             // onChange={handleChange}
//             className="construction-input"
//           />
//         </div>
//         <div>
//           <label className="construction-label">Supplier:</label>
//           <input
//             type="text"
//             name="supplier"
//             // value={formData.supplier}
//             // onChange={handleChange}
//             className="construction-input"
//           />
//         </div>
//         <div>
//           <label className="construction-label">description:</label>
//           <input
//             type="number"
//             name="budget"
//             // value={formData.budget}
//             // onChange={handleChange}
//             className="construction-input"
//           />
//         </div>
//         <button type="submit" className="construction-button">
//           Submit
//         </button>
//         <button className="construction-button" onClick={<Construction />}>
//           Edit Construction
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ConstructionForm;
import React, { useState } from "react";
import "./ConstructionForm.css"; // Import the CSS file
import ButterToast, { Cinnamon } from "butter-toast";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

const SiteForm = () => {
  const [formData, setFormData] = useState({
    orderNo: "",
    quantity: "",
    supplier: "",
    description: "",
    selectedSite: "", // To store the selected construction site
    constructionPhase: "", // To store the construction phase
    location: "", // To specify the location within the site
    specialRequirements: "", // To specify special requirements
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:3500/constructions/addSites",
        {
          // Replace with  API endpoint
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

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
    } catch (error) {
      console.error("Error adding record", error);
    }
  };

  return (
    <div className="construction-form-container">
      <br></br>
      <h2 className="construction-form-header">Add Site Records</h2>
      <form className="construction-form" onSubmit={handleSubmit}>
        <div>
          <label className="construction-label">Order No:</label>
          <input
            type="text"
            name="orderNo"
            value={formData.orderNo}
            onChange={handleChange}
            className="construction-input"
          />
        </div>
        <div>
          <label className="construction-label">Quantity:</label>
          <input
            type="text"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="construction-input"
          />
        </div>
        <div>
          <label className="construction-label">Supplier:</label>
          <input
            type="text"
            name="supplier"
            value={formData.supplier}
            onChange={handleChange}
            className="construction-input"
          />
        </div>
        <div>
          <label className="construction-label">Description:</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="construction-input"
          />
        </div>
        {/* Site Selection */}
        <div>
          <label className="construction-label">
            Select Construction Site:
          </label>
          <select
            name="selectedSite"
            value={formData.selectedSite}
            onChange={handleChange}
            className="construction-input">
            <option value="">Select a Construction Site</option>
            <option value="site1">Construction Site 1</option>
            <option value="site2">Construction Site 2</option>
            <option value="site3">Construction Site 3</option>
            <option value="site4">Construction Site 4</option>
            <option value="site5">Construction Site 5</option>
          </select>
        </div>
        {/* Construction Details */}
        <div>
          <label className="construction-label">Construction Phase:</label>
          <input
            type="text"
            name="constructionPhase"
            value={formData.constructionPhase}
            onChange={handleChange}
            className="construction-input"
          />
        </div>
        <div>
          <label className="construction-label">Location within Site:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="construction-input"
          />
        </div>
        <div>
          <label className="construction-label">Special Requirements:</label>
          <input
            type="text"
            name="specialRequirements"
            value={formData.specialRequirements}
            onChange={handleChange}
            className="construction-input"
          />
        </div>
        <button type="submit" className="construction-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SiteForm;
