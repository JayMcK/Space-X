import React, { useState, useEffect } from "react";
import { LOCAL_STORAGE_KEY } from "../../utils/localStorageKey";
import LaunchEntry from "./LaunchEntry";

export default function LaunchesTable({ launches }) {
  const [allLaunches, setAllLaunches] = useState([]);

  useEffect(() => {
    if (launches?.length) {
      const newLaunches = launches.map((launch) => {
        launch.liked = false;
        return launch;
      });
      setAllLaunches(newLaunches);
    }
  }, [launches]);

  const handleLike = (id) => {
    const newLaunches = allLaunches.map((launch) => {
      if (launch.id === id) {
        if (launch.liked === true) launch.liked = false;
        else launch.liked = true;
      }
      return launch;
    });
    setAllLaunches(newLaunches);
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(allLaunches));
  }, [allLaunches]);

  return (
    <section role="list" className="list m-10">
      <div className="grid grid-cols-12 gap-1 bg-themeWhite text-themeBlack font-bold text-center p-5">
        <div className="text-sm col-span-4 md:text-base">Mission</div>
        <div className="text-sm col-span-3 md:text-base">Date (UTC)</div>
        <div className="text-sm col-span-4 md:text-base">Launchpad</div>
        <div className="col-span-1"></div>
      </div>
      {allLaunches.length &&
        allLaunches.map((launch) => (
          <LaunchEntry
            key={launch.id}
            id={launch.id}
            name={launch.name}
            date={launch["date_utc"]}
            launchpad={launch.launchpad}
            onHandleLike={() => handleLike(launch.id)}
            liked={launch.liked}
          />
        ))}
    </section>
  );
}
