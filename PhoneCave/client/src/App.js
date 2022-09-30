import React from "react";
import { Routes, Route } from "react-router-dom";
// import HomePage from "../src/pages/HomePage";
import PhoneDetail from "./components/PhoneDetail";
import PhoneList from "./components/PhoneList";

function App() {
  return (
    <div className="App">
        <PhoneList></PhoneList>

        <Routes>
          <Route
            path="/phones/:id"
            element={<PhoneDetail/>}
          />
        </Routes>
    </div>
  );
}

export default App;
