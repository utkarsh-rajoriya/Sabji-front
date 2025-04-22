import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";
import AddSabji from "./Components/AddSabji";
import "./App.css"; // ✅ Import a global CSS file

function App() {
  return (
    <Router>
      <Navbar title="Sabji.com" />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/addSabji" element={<AddSabji />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
