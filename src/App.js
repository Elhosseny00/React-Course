import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import Home from "./Home.jsx";
import About from "./About.jsx";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
