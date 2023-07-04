import PrimaryButton from "../../../../../components/Button/PrimaryButton";
import SecondaryButton from "../../../../../components/Button/SecondaryButton";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import lp from "./../../../../../../assets/Home/landing-page.png";

const Landing = () => {
  return (
    <section className="flex flex-col w-full items-center  pb-24 pt-48">
      <h1 className="text-indigo-950 font-bold text-5xl w-[55%] text-center mb-12">
        Generate your invoices in the blink of an eye!
      </h1>
      <p className="text-xl w-[45%] text-violet-600 text-center font-light">
        Simplify your life as a self-employed entrepreneur by creating
        professional invoices quickly and easily
      </p>

      <div className="flex gap-5 mt-10">
        <SecondaryButton text="Demo" type="button" logo={faPlay} />
        <PrimaryButton text="Get started" type="button" />
      </div>
      <img src={lp} alt="image-lp" className="mt-10 border rounded-lg" />
    </section>
  );
};

export default Landing;
