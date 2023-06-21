import React from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PortfolioContent from "./PortfolioContent";

const PortfolioPage = () => {
  return (
    <div className=" mt-[60px] mb-0 mx-auto f w-[1139px] text-base flex">
      <Sidebar></Sidebar>
      <div className="w-[75%] py-0 px-[15px]">
        <Navbar></Navbar>
        <PortfolioContent></PortfolioContent>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default PortfolioPage;
