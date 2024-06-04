import "./App.css";
import Signin from "./components/Signin";

import Main from "./components/Main";

import { Route, Routes } from "react-router-dom";
import NewsDetails from "./components/NewsDetails";
import WeatherTab from "./components/WeatherTab";

function App() {
  return (
    <>
      {/* <Navbar /> */}
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
