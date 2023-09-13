import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Bollywood from "../Pages/Bollywood";
import Technology from "../Pages/Technology";
import Hollywood from "../Pages/Hollywood";
import Fitness from "../Pages/Fitness";
import Food from "../Pages/Food";
import Article from "../Pages/Article";

function RouteComp() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Bollywood" element={<Bollywood />} />
        <Route path="/Technology" element={<Technology />} />
        <Route path="/Hollywood" element={<Hollywood />} />
        <Route path="/Fitness" element={<Fitness />} />
        <Route path="/Food" element={<Food />} />
        <Route path="/article/:Id" element={<Article />} />
      </Routes>
    </div>
  );
}

export default RouteComp;
