import React from "react";
import Navbar from "../components/Navbar"; // Import the Navbar component
import { Outlet } from "react-router-dom";
import Footer from '../components/Footer';
import HiveHelper from "../pages/HiveHelper";



const MainLayout = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <main className="min-h-screen">
        <Outlet /> {/* This renders the current page's content */}
        {/* {children} */}
        <HiveHelper />
      </main>
      {/* <Footer/> */}
    </div>
  );
};

export default MainLayout;
