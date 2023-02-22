import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AddPosts, Home, SinglePost } from "../page/index";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addpost" element={<AddPosts />} />
        <Route path="/single/:_id" element={<SinglePost />} />
      </Routes>
    </Router>
  );
}
