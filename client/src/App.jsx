import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/homepage/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Register from "./authScreens/Register";
import LogIn from "./authScreens/LogIn";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<LogIn />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
