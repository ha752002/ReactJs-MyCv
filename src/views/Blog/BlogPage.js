import React from "react";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import BlogContent from "./BlogContent";


const BlogPage = () => {
  return (
    <div className=" mt-[60px] mb-0 mx-auto f w-[1139px] text-base flex">
      <Sidebar></Sidebar>
      <div className="w-[75%] py-0 px-[15px] content__right">
        <Navbar></Navbar>
        <BlogContent></BlogContent>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default BlogPage;
