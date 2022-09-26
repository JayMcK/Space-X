import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";
import rocket from "../../assets/rocket.svg";
import planets from "../../assets/planets.svg";
import filledHeart from "../../assets/filled-heart.svg";
import house from "../../assets/house.svg";

export default function Header() {
  return (
    <nav
      role="navigation"
      aria-label="Main"
      className="header-component flex flex-row py-2 justify-between items-center bg-themeWhite font-bold px-2 md:py-0"
    >
      <div>
        <Link to="/">
          <img
            className="h-10 cursor-pointer active:opacity-50"
            src={logo}
            alt="logo"
          />
        </Link>
      </div>
      <div className="flex flex-row">
        <Link to="/">
          <div className="flex flex-col p-2 space-y-2 cursor-pointer md:p-4">
            <img
              className="h-8 origin-center hover:rotate-12 active:opacity-50"
              src={house}
              alt="rocket"
            />
            <p className="hidden font-themeFontFamily md:block">Home</p>
          </div>
        </Link>
        <Link to="/upcoming-launch">
          <div className="flex flex-col p-2 space-y-2 cursor-pointer md:p-4">
            <img
              className="h-8 origin-center hover:rotate-12 active:opacity-50"
              src={rocket}
              alt="rocket"
            />
            <p className="hidden font-themeFontFamily md:block">
              Upcoming launch
            </p>
          </div>
        </Link>
        <Link to="/all-launches">
          <div className="flex flex-col p-2 space-y-2 cursor-pointer md:p-4">
            <img
              className="h-8 origin-center hover:rotate-12 active:opacity-50"
              src={planets}
              alt="rocket"
            />
            <p className="hidden font-themeFontFamily md:block">All Launches</p>
          </div>
        </Link>
        <Link to="/my-launches">
          <div className="flex flex-col p-2 space-y-2 cursor-pointer md:p-4">
            <img
              className="h-8 origin-center hover:rotate-12 active:opacity-50"
              src={filledHeart}
              alt="rocket"
            />
            <p className="hidden font-themeFontFamily md:block">My Launches</p>
          </div>
        </Link>
      </div>
    </nav>
  );
}
