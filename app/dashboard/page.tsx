"use client";
import React from "react";
import ComingSoon from "./components/comingsoon";
import Navbar from "../navbar";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-20">
        <ComingSoon />
      </div>
    </div>
  );
};

export default Dashboard;
