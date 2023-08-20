import { useState } from "react";
import SearchContainer from "./components/common/SearchContainer";
import Home from "./Layouts/Home";
import Main from "./Layouts/Main";

import { useGetFlightsQuery } from "./features/api/apiSlice";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FlightsContainer from "./components/common/FlightsContainer";
import Hero from "./components/common/Hero";

function App() {
  return (
    <div className="min-h-screen scroll-smooth dark:bg-slate-600">
      <Router>
        <Routes>
          <Route element={<Main />}>
          <Route path="/" element={<Hero />} /> 
          <Route path="/flights" element={<FlightsContainer />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
