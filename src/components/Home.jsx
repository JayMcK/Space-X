import homeBackgroundMedium from "../assets/homeBackgroundMedium.png";

export default function Home() {
  return (
    <section className="font-themeFontFamily relative bg-black md:bg-themeWhite">
      <img
        className="sm:hidden md:block"
        src={homeBackgroundMedium}
        alt="astronauts touching"
      />
      <div className="flex h-screen md:hidden relative justify-center">
        <h1 className="text-4xl text-center top-36 absolute top-36 static md:text-4xl md:top-56 lg:text-7xl md:absolute text-themeWhite">
          The New Earth.<br></br> Our New Home.<br></br> Join us on Mars.
        </h1>
      </div>
      <h1 className="hidden ml-10 text-4xl top-36 static md:block md:text-4xl md:top-56 lg:text-7xl md:absolute text-themeWhite">
        The New Earth.<br></br> Our New Home.<br></br> Join us on Mars.
      </h1>
    </section>
  );
}
