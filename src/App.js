import "./App.css";
import Signin from "./components/Signin";

import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { useState } from "react";

import { Route, Routes } from "react-router-dom";
import NewsDetails from "./components/NewsDetails";
import WeatherTab from "./components/WeatherTab";

function App() {
    const [currentPage, setCurrentPage] = useState(1)

  return (
    <>
      <Navbar className="fixed" currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/" element={<Main currentPage={currentPage} setCurrentPage={setCurrentPage}/>} />
        <Route path="/details" element={<NewsDetails />} />
        <Route path="/weather" element={<WeatherTab />} />
      </Routes>
      {/* <Signin/> */}
    </>
  );
}

export default App;