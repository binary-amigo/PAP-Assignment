import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

const LandingPage = () => {
  return (
    <div className="h-screen w-screen bg-slate-200">
        <Navbar/>
        <Hero/>
    </div>
  );
};

export default LandingPage;
