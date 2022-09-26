import allLaunchesBackground from "../assets/allLaunchesBackground.png";
import LaunchesTable from "./commonComponents/LaunchesTable";
import loader from "../assets/loader.svg";

export default function AllLaunches({ launches }) {
  return (
    <section
      className="flex flex-col py-2 font-themeFontFamily justify-center bg-black md:bg-themeWhite min-h-screen md:py-4"
      style={{ backgroundImage: `url(${allLaunchesBackground})` }}
    >
      <h2 className="mt-6 text-center text-4xl text-themeWhite font-bold md:mt-0">
        All Launches
      </h2>
      {!launches.length ? (
        <div className="self-center">
          <img className="h-60 animate-spin my-2" src={loader} alt="loading" />
        </div>
      ) : null}
      {launches.length ? <LaunchesTable launches={launches} /> : null}
    </section>
  );
}
