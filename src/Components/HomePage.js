import React, { useEffect, useState } from "react";
import SabjiCard from "./SabjiCard";
import "./HomePage.css"; // Importing the CSS file

export default function HomePage() {
  const [data, setData] = useState([]);

  let fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8080/");
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="homepage-container">
      <h1 className="title">APGI Sabji Wale</h1>

      <div className="sabji-container">
        {data.length > 0 ? (
          data.map((e) => (
            <SabjiCard key={e.id} name={e.name} rate={e.rate} image={e.imageName} />
          ))
        ) : (
          <p className="no-data">No sabjis available.</p>
        )}
      </div>
    </div>
  );
}