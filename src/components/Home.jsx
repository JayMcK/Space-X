import homeBackgroundMedium from "../assets/homeBackgroundMedium.png";

export default function Home() {
  return (
    <section
      className="font-themeFontFamily flex h-screen justify-center items-center bg-right-bottom"
      style={{ backgroundImage: `url(${homeBackgroundMedium})` }}
    >
      <h1 className="text-center text-themeWhite text-4xl md:block md:text-4xl lg:text-7xl md:ml-10">
        The New Earth.<br></br> Our New Home.<br></br> Join us on Mars.
      </h1>
    </section>
  );
}
