import React from "react";
import Navbar from "../components/Navbar"; // Import the Navbar component
import { Outlet } from "react-router-dom";
import Footer from '../components/Footer';


const MainLayout = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <main className="min-h-screen">
        <Outlet /> {/* This renders the current page's content */}
      </main>
      {/* <Footer/> */}
    </div>
  );
};

export default MainLayout;
