import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";
import rocket from "../../assets/rocket.svg";
import planets from "../../assets/planets.svg";
import filledHeart from "../../assets/filled-heart.svg";

export default function Header() {
  return (
    <section className="flex flex-row justify-between items-center bg-themeWhite font-bold px-2 bg-sky-500">
      <div>
        <Link to="/">
          <img
            className="h-10 cursor-pointer origin-center active:opacity-50"
            src={logo}
            alt="logo"
          />
        </Link>
      </div>
      <div className="flex flex-row">
        <Link to="/next-launch">
          <div className="flex flex-col p-4 space-y-2 cursor-pointer">
            <img
              className="h-8 origin-center hover:rotate-12 active:opacity-50"
              src={rocket}
              alt="rocket"
            />
            <p className="font-themeFontFamily">Next launch</p>
          </div>
        </Link>
        <Link to="/all-launches">
          <div className="flex flex-col p-4 space-y-2 cursor-pointer">
            <img
              className="h-8 origin-center hover:rotate-12 active:opacity-50"
              src={planets}
              alt="rocket"
            />
            <p className="font-themeFontFamily">All Launches</p>
          </div>
        </Link>
        <Link to="/my-launches">
          <div className="flex flex-col p-4 space-y-2 cursor-pointer">
            <img
              className="h-8 origin-center hover:rotate-12 active:opacity-50"
              src={filledHeart}
              alt="rocket"
            />
            <p className="font-themeFontFamily">My Launches</p>
          </div>
        </Link>
      </div>
    </section>
  );
}
