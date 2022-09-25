import { Link } from "react-router-dom";

import rocket from "../../assets/rocket.svg";
import planets from "../../assets/planets.svg";
import filledHeart from "../../assets/filled-heart.svg";

export default function Footer() {
  return (
    <section className="flex flex-row justify-center items-center bg-themeWhite font-bold px-2 space-x-4 py-4">
      <Link to="/next-launch">
        <img
          className="h-8 origin-center hover:rotate-12 active:opacity-50"
          src={rocket}
          alt="rocket"
        />
      </Link>
      <Link to="/all-launches">
        <img
          className="h-8 origin-center hover:rotate-12 active:opacity-50"
          src={planets}
          alt="rocket"
        />
      </Link>
      <Link to="/my-launches">
        <img
          className="h-8 origin-center hover:rotate-12 active:opacity-50"
          src={filledHeart}
          alt="rocket"
        />
      </Link>
    </section>
  );
}
