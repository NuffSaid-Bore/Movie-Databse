import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./Components/navBar";
import HomePage from "./Pages/Home";
import MovieDetailsPage from "./Pages/Details";
import CardWithSearch from "./Components/CardWithSearch";


function App() {
  const handleSearch = () => {
    alert("Search button clicked!");
  }
  return (
      <Router>
        <Nav />
        <div className="app-container">
          <CardWithSearch
            title="Welcome"
            content="This is an example of a card with a search button."
            onSearch={handleSearch}
          />
        </div>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HomePage />
                </>
              }
            />
            <Route path="/movie/:id" element={<MovieDetailsPage />} />
            <Route path="*" element={<h1>404 - Page Not Found</h1>} />
          </Routes>
      </Router>
  );
}

export default App;
