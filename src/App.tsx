import { BrowserRouter as Router, Routes,Route} from "react-router-dom";

import Home from "./pages/Home";
import Project from "./pages/Projects";
import About from "./pages/About";

function App() {
  return (
    <Router>

      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pages/Projects" element={<Project/>}/>
      <Route path="/pages/About" element={<About/>}/>
      </Routes>
      
    </Router>
  );
}

export default App;
