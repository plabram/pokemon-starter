import "./App.css"
import { Routes, Route } from 'react-router-dom'
import Home from "./components/Home/Home"
import Detail from "./components/Detail/Detail"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:name" element={<Detail />} />
      </Routes>
    </>
  )
}

export default App
