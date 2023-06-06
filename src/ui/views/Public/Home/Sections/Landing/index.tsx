import lp from "./../../../../../../assets/Home/landing-page.jpeg";

const Landing = () => {
  return (
    <section
      className="w-full h-screen bg-cover flex justify-center items-center"
      style={{ backgroundImage: `url(${lp})`, backgroundAttachment: "fixed" }}
    >
      <h1 className="text-white text-6xl font-semibold">La Note</h1>
    </section>
  );
};

export default Landing;
