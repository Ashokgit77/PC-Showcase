import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CardList from "./pages/CardList";
import EachCard from "./pages/EachCard";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cardlist" element={<CardList />} />
        <Route path="/card-component/:id" element={<EachCard />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
