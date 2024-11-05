import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/homepage/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
