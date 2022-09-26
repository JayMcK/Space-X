import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import Home from "./Home";
import Upcoming from "./Upcoming";
import AllLaunches from "./AllLaunches";
import MyLaunches from "./MyLaunches";

function App() {
  const [allLaunches] = useMission([]);
  const [launches, setLaunches] = useState([]);

  function useMission() {
    const ALL_URL = "https://api.spacexdata.com/v4/launches/upcoming";

    const [allMissions, setAllMissions] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const [allMissionsResponse] = await Promise.all([fetch(ALL_URL)]);
          const [allMissions] = await Promise.all([allMissionsResponse.json()]);
          // setAllMissions(allMissions);
          setLaunches(allMissions);
        } catch (e) {
          console.log("Oops something went wrong: ", e);
        }
      };
      fetchData();
    }, []);
    return [allMissions];
  }

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upcoming-launch" element={<Upcoming />} />
        <Route
          path="/all-launches"
          element={
            <AllLaunches launches={launches} setLaunches={setLaunches} />
          }
        />
        <Route
          path="/my-launches"
          element={<MyLaunches launches={launches} setLaunches={setLaunches} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
