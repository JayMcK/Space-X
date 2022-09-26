import allLaunchesBackground from "../assets/allLaunchesBackground.png";
import LaunchesTable from "./commonComponents/LaunchesTable";

export default function AllLaunches({ launches }) {
  console.log("launches", launches);

  return (
    <section
      className="flex flex-col font-themeFontFamily relative justify-center bg-black md:bg-themeWhite pt-2 h-screen"
      style={{ backgroundImage: `url(${allLaunchesBackground})` }}
    >
      <h2 className="mb-6 text-center text-4xl text-themeWhite font-bold">
        All Launches
      </h2>
      <LaunchesTable launches={launches} />
    </section>
  );
}
