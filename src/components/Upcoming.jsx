import { useState, useEffect } from "react";
import { extractDates } from "../utils/helperFunctions";
import prettyMilliseconds from "pretty-ms";
import ShareFeature from "./commonComponents/ShareFeature";

import upcomingBackground from "../assets/upcomingBackground.png";
import loader from "../assets/loader.svg";
import share from "../assets/share.svg";

export default function Upcoming() {
  const [nextMission, allMissions] = useMission();
  const [days, hours, minutes, seconds] = useDates(allMissions);

  return (
    <section
      className="flex flex-col font-themeFontFamily justify-center bg-black md:bg-themeWhite py-4"
      style={{ backgroundImage: `url(${upcomingBackground})` }}
    >
      <div className="flex flex-col items-center justify-center text-4xl text-themeWhite font-bold">
        <div className="flex flex-col items-center md:flex-row">
          {allMissions.length ? (
            <h2 className="mb-6 text-center">Upcoming: {nextMission.name}</h2>
          ) : null}
          {!allMissions.length ? (
            <h2 className="mb-6 animate-pulse text-center">Upcoming: ...</h2>
          ) : null}
        </div>

        <div className="flex flex-col items-center mb-6">
          {allMissions.length ? <p className="text-7xl">{days}</p> : null}
          {!allMissions.length ? (
            <div>
              <img
                className="h-14 animate-spin my-2"
                src={loader}
                alt="loading"
              />
            </div>
          ) : null}
          <div className="rounded-lg border-2 border-themeWhite">
            <p className="p-1">DAYS</p>
          </div>
        </div>
        <div className="flex flex-col items-center mb-6">
          {allMissions.length ? <p className="text-7xl">{hours}</p> : null}
          {!allMissions.length ? (
            <div>
              <img
                className="h-14 animate-spin my-2"
                src={loader}
                alt="loading"
              />
            </div>
          ) : null}
          <div className="rounded-lg border-2 border-themeWhite">
            <p className="p-1">HOURS</p>
          </div>
        </div>
        <div className="flex flex-col items-center mb-6">
          {allMissions.length ? <p className="text-7xl">{minutes}</p> : null}
          {!allMissions.length ? (
            <div>
              <img
                className="h-14 animate-spin my-2"
                src={loader}
                alt="loading"
              />
            </div>
          ) : null}
          <div className="rounded-lg border-2 border-themeWhite">
            <p className="p-1">MINUTES</p>
          </div>
        </div>
        <div className="flex flex-col items-center mb-6">
          {allMissions.length ? <p className="text-7xl">{seconds}</p> : null}
          {!allMissions.length ? (
            <div>
              <img
                className="h-14 animate-spin my-2"
                src={loader}
                alt="loading"
              />
            </div>
          ) : null}
          <div className="rounded-lg border-2 border-themeWhite">
            <p className="p-1">SECONDS</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center space-y-4">
        <div>
          <img className="h-6" src={share} alt="share icon" />
        </div>
        <div className="pt-0 pb-2 md:pb-0">
          <ShareFeature />
        </div>
      </div>
    </section>
  );
}

function useMission() {
  const NEXT_URL = "https://api.spacexdata.com/v4/launches/next";
  const ALL_URL = "https://api.spacexdata.com/v4/launches/upcoming";

  const [nextMission, setNextMission] = useState({});
  const [allMissions, setAllMissions] = useState([]);
  const [missionThree, setMissionThree] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [nextMissionResponse, allMissionsResponse] = await Promise.all([
          fetch(NEXT_URL),
          fetch(ALL_URL),
        ]);
        const [nextMission, allMissions] = await Promise.all([
          nextMissionResponse.json(),
          allMissionsResponse.json(),
        ]);
        setNextMission(nextMission);
        setAllMissions(allMissions);
        setMissionThree(allMissions[3]);
      } catch (e) {
        console.log("Oops something went wrong: ", e);
      }
    };
    fetchData();
  }, []);
  return [nextMission, allMissions, missionThree];
}

function useDates(allMissions) {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  useEffect(() => {
    if (allMissions.length) {
      const currentDate = new Date();
      const launchDate = new Date(allMissions[3]["date_utc"]);
      const timeLeft = Math.abs(launchDate - currentDate);
      if (timeLeft === timeLeft) {
        const convertedTimeLeft = prettyMilliseconds(timeLeft, {
          verbose: true,
        });
        console.log("ctl", convertedTimeLeft);
        setDays(extractDates(convertedTimeLeft, "days"));
        setHours(extractDates(convertedTimeLeft, "hours"));
        setMinutes(extractDates(convertedTimeLeft, "minutes"));
        setSeconds(extractDates(convertedTimeLeft, "seconds"));
        console.log(days, hours, minutes, seconds);
      }
    }
  }, [allMissions]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prev) => {
        if (prev === 0) {
          setSeconds("59");

          setMinutes((prev) => {
            if (prev === 0) {
              setMinutes("59");

              setHours((prev) => {
                if (prev === 0) {
                  setHours("23");

                  setDays((prev) => String(prev) - 1);
                }
                return String(prev) - 1;
              });
            }
            return String(prev) - 1;
          });
        }
        return String(prev) - 1;
      });
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return [days, hours, minutes, seconds];
}
