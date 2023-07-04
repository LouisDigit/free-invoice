import SecondaryButton from "../../../../../components/Button/SecondaryButton";
import PrimaryButton from "../../../../../components/Button/PrimaryButton";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const CallToAction = () => {
  return (
    <section className="flex w-full px-24 pb-24 items-center gap-12 bg-white  text-white">
      <div className="flex flex-col justify-center bg-violet-950 rounded-lg items-center py-16 gap-5 text-center">
        <h2 className="text-4xl font-semibold">
          Supercharge your invoice management
        </h2>
        <p className="text-lg font-light opacity-75 w-[50%]">
          Discover our intuitive and efficient invoice management solution.
          Simplify invoice creation, tracking, and management, while improving
          productivity and profitability.
        </p>
        <div className="flex gap-5 mt-10">
          <SecondaryButton text="Demo" type="button" logo={faPlay} />
          <PrimaryButton text="Get started" type="button" />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
