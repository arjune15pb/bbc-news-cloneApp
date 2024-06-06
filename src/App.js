import "./App.css";
import Signin from "./components/Signin";

import Navbar from "./components/Navbar";
import Main from "./components/Main";

import { Route, Routes } from "react-router-dom";
import NewsDetails from "./components/NewsDetails";
import WeatherTab from "./components/WeatherTab";

function App() {
  return (
    <>
      <Navbar className="fixed" />
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/" element={<Main />} />
        <Route path="/details" element={<NewsDetails />} />
        <Route path="/weather" element={<WeatherTab />} />
      </Routes>
      {/* <Signin/> */}
    </>
  );
}

export default App;