import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import Home from "./Home";
import Upcoming from "./Upcoming";
import AllLaunches from "./AllLaunches";
import MyLaunches from "./MyLaunches";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upcoming-launch" element={<Upcoming />} />
        <Route path="/all-launches" element={<AllLaunches />} />
        <Route path="/my-launches" element={<MyLaunches />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
