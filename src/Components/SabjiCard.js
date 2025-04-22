import React from "react";
import "./SabjiCard.css"; // ✅ Import separate CSS for better styling

export default function SabjiCard({ name, rate, image }) {
  return (
    <div className="sabji-card">
      {image ? (
        <img
          src={`${process.env.REACT_APP_BACKEND_URL}/images/${image}`}
          alt={name}
          className="sabji-img"
        />
      ) : (
        <p className="no-image">No Image Available</p>
      )}
      <h3 className="sabji-name">{name}</h3>
      <p className="sabji-rate">₹{rate} per kg</p>
      <button className="btn-order">Order Now</button>
    </div>
  );
}
