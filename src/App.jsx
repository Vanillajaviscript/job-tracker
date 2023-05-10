import {Register, Landing, Error, Dashboard} from "./pages";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/register">Register</Link>
        <Link to="/landing">Landing</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/landing" element={<Landing/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
