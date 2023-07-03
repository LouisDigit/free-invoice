import PrimaryButton from "../../../../../components/Button/PrimaryButton";
import lp from "./../../../../../../assets/Home/landing-page.jpeg";

const Landing = () => {
  return (
    <section
      className="w-full h-screen bg-cover flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${lp})`, backgroundAttachment: "fixed" }}
    >
      <div className="flex flex-col gap-2 mb-5 items-center justify-center z-50 bg-black  p-2">
        <h1 className="text-white text-6xl text-center font-black">
          Générez vos factures en un clin d'œil !
        </h1>
        <h3 className="text-white font-bold text-xl">
          Simplifiez votre vie d'auto-entrepreneur en créant rapidement et
          facilement des factures professionnelles.
        </h3>
      </div>

      <div className="flex gap-3 z-50 ">
        <PrimaryButton
          text="Nous contacter"
          type="button"
          cssClass="font-bold"
        />
        <PrimaryButton
          text="En savoir plus"
          type="button"
          cssClass="font-bold"
        />
      </div>
      <div className="absolute w-full h-full bg-black opacity-50 z-10"></div>
    </section>
  );
};

export default Landing;
