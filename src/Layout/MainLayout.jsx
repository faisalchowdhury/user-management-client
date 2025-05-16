import React from "react";
import "../App.css";
import Header from "../Component/Header";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
