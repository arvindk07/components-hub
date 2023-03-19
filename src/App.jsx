import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AppFilterSearch from "./components/AppBarFilter";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aap-filter-search" element={<AppFilterSearch />} />
      </Routes>
    </Router>
  );
}

export default App;
