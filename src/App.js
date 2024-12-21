import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import HomePage from "./pages/HomePage";
import ServicePage from "./pages/ServicePage";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/:environment" element={<ServicePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;