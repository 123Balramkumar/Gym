import { BrowserRouter, Route, Routes } from "react-router-dom";

import AboutUs from "./About Us/AboutUs";
import "./App.css";
import BecomeWFTPartner from "./Become-WFT-Partner/Become-WFT-Partner";
import Fitness from "./Fitness/Fitness";
import Gyms from "./Gyms/Gyms";
import Navbar from "./Navbar/Navbar";
import Nutrition from "./Nutrition/Nutrition";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Fitness" element={<Fitness />} />
          <Route path="/Nutrition" element={<Nutrition />} />
          <Route path="/Gyms" element={<Gyms />} />
          <Route path="/BecomeWFTPartner" element={<BecomeWFTPartner />} />
          <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
