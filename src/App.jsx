import "./stylesheets/css/main.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Detail from "./components/Detail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:name" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
