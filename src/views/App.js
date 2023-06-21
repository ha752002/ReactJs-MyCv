import './App.scss';
import { Routes, Route, BrowserRouter } from "react-router-dom";

import HomePage from "../views/Home/HomePage";
import ResumePage from './Reume/ResumePage';
import PortfolioPage from './Portpolio/PortfolioPage';
import BlogPage from './Blog/BlogPage';
import ContactPage from './Contact/ContactPage';


function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* 👈 Renders at /app/ */}
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/resume" element={<ResumePage />}></Route>
        <Route path="/portfolio" element={<PortfolioPage />}></Route>
        <Route path="/blog" element={<BlogPage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
