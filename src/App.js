import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import CustomNavbar from "./components/Navbar";
import AllNews from "./components/AllNews";
import TopNews from "./components/TopNews";
import TrendingNews from "./components/TrendingNews";
import ScienceNews from "./components/ScienceNews";
import EntertainmentNews from "./components/EntertainmentNews";
import SportsNews from "./components/SportsNews";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route

function App() {
  return (
    <div>
      <CustomNavbar />
      <div className="container mt-4">
        {/* Use Routes component to wrap multiple Route components */}
        <Routes>
          <Route path="/all" element={<AllNews />} />
          <Route path="/top" element={<TopNews />} />
          <Route path="/trending" element={<TrendingNews />} />
          <Route path="/science" element={<ScienceNews />} />
          <Route path="/entertainment" element={<EntertainmentNews />} />
          <Route path="/sports" element={<SportsNews />} />
          {/* Add a default route for the root path */}
          <Route path="/newsApp" element={<AllNews />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
