import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../src/pages/HomePage";
import PhoneDetail from "./components/PhoneDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
     
          <Route
            path="/phones/:id"
            element={<PhoneDetail/>}
          />
      </Routes>
    </div>
  );
}

export default App;
