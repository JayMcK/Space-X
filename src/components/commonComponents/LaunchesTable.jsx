import React, { useState, useEffect } from "react";

import LaunchEntry from "./LaunchEntry";

export default function LaunchesTable({ launches }) {
  const [allLaunches, setAllLaunches] = useState([]);

  useEffect(() => {
    const newLaunches = launches.map((launch) => {
      launch.liked = false;
      return launch;
    });
    setAllLaunches(newLaunches);
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

  return (
    <section className="m-10">
      <div className="grid grid-cols-12 gap-1 bg-themeWhite text-themeBlack font-bold text-center p-5">
        <div className="col-span-4">Mission</div>
        <div className="col-span-3">Date (UTC)</div>
        <div className="col-span-4">Launchpad</div>
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
