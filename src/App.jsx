import Home from "./Pages/Home";
import Courses from "./Pages/Courses";
import Dashboard from "./Pages/Dashboard";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/course" element={<Courses />}></Route>
      </Routes>
    </div>
  );
}

export default App;
