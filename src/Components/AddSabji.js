import React, { useState } from "react";
import './AddSabji.css';
export default function AddSabji() {
  const [name, setName] = useState("");
  const [rate, setRate] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (!name || !rate || !image) {
      alert("Please enter all fields including an image!");
      return;
    }
  
    try {
      const formData = new FormData();
      formData.append("sabji", JSON.stringify({ name, rate })); // Convert object to JSON
      formData.append("imageFile", image); // Append image file
  
      const response = await fetch("http://localhost:8080/addSabji", {
        method: "POST",
        body: formData,
      });
  
      if (response.ok) {
        alert("Sabji added successfully!");
        setName("");
        setRate("");
        setImage(null);
      } else {
        alert("Failed to add sabji!");
      }
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <div className="container w-25 my-3">
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        {/* Name Field */}
        <div className="mb-3">
          <label htmlFor="sabjiName" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="sabjiName"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <div className="form-text">Sabji ko naam!</div>
        </div>

        {/* Rate Field */}
        <div className="mb-3">
          <label htmlFor="sabjiRate" className="form-label">Rate (₹ per kg)</label>
          <input
            type="number"
            className="form-control"
            id="sabjiRate"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            required
            min="1"
          />
          <div className="form-text">Rupee per kilo!</div>
        </div>

        {/* File Upload */}
        <div className="mb-3">
          <label htmlFor="sabjiImage" className="form-label">Upload Image</label>
          <input
            type="file"
            className="form-control"
            id="sabjiImage"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
