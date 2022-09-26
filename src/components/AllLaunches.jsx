import { useState, useEffect } from "react";

import allLaunchesBackground from "../assets/allLaunchesBackground.png";
import LaunchesTable from "./commonComponents/LaunchesTable";
import loader from "../assets/loader.svg";

export default function AllLaunches({ launches }) {
  return (
    <section
      className="flex flex-col font-themeFontFamily relative justify-center bg-black md:bg-themeWhite pt-2 h-screen"
      style={{ backgroundImage: `url(${allLaunchesBackground})` }}
    >
      <h2 className="mb-6 text-center text-4xl text-themeWhite font-bold">
        All Launches
      </h2>
      {!launches.length && (
        <div className="self-center">
          <img className="h-60 animate-spin my-2" src={loader} alt="loading" />
        </div>
      )}
      {launches.length && <LaunchesTable launches={launches} />}
    </section>
  );
}
