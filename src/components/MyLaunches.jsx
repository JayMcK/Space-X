import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LikedLaunch from "../components/commonComponents/LikedLaunch";
import { LOCAL_STORAGE_KEY } from "../utils/localStorageKey";

import myLaunchesBackground from "../assets/myLaunchesBackground.png";

export default function MyLaunches({ launches, setLaunches }) {
  const [likedLaunches, setLikedLaunches] = useState([]);

  useEffect(() => {
    const launches = [];
    const likedLaunches = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (likedLaunches !== null) {
      const data = JSON.parse(likedLaunches);
      data.map((launch) => {
        if (launch.liked) launches.push(launch);
      });
      setLikedLaunches(launches);
    }
  }, []);

  const handleDelete = (id) => {
    const newLaunches = likedLaunches.filter((launch) => launch.id !== id);
    setLikedLaunches(newLaunches);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newLaunches));

    const updatedLaunches = launches.map((launch) => {
      if (launch.id === id) launch.liked = false;
      return launch;
    });
    setLaunches(updatedLaunches);
  };

  return (
    <section
      className="flex flex-col font-themeFontFamily relative justify-center bg-black md:bg-themeWhite pt-2 min-h-screen"
      style={{ backgroundImage: `url(${myLaunchesBackground})` }}
    >
      <h2 className="mb-6 text-center text-4xl text-themeWhite font-bold">
        My Launches
      </h2>
      {!likedLaunches.length ? (
        <p className="text-white text-2xl text-center p-y-4">
          Click{" "}
          <Link to="/all-launches" className="underline hover:animate-pulse">
            here
          </Link>{" "}
          to visit see all missions and choose which ones you want to save as
          your launches!
        </p>
      ) : null}
      {likedLaunches.length ? (
        <section className="m-10">
          <div className="grid grid-cols-12 gap-1 bg-themeWhite text-themeBlack font-bold text-center p-5">
            <div className="text-sm col-span-4 md:text-base">Mission</div>
            <div className="text-sm col-span-3 md:text-base">Date (UTC)</div>
            <div className="text-sm col-span-4 md:text-base">Launchpad</div>
            <div className="col-span-1"></div>
          </div>
          {likedLaunches.map((launch) => (
            <LikedLaunch
              key={launch.id}
              id={launch.id}
              name={launch.name}
              date={launch["date_utc"]}
              launchpad={launch.launchpad}
              onHandleDelete={() => handleDelete(launch.id)}
              liked={launch.liked}
            />
          ))}
        </section>
      ) : null}
    </section>
  );
}
