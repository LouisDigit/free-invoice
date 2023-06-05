import { Link } from "react-router-dom";
import lp from "./../../../../assets/Home/landing-page.jpeg";
import PrimaryButton from "../../../components/Button/PrimaryButton";
import SecondaryButton from "../../../components/Button/SecondaryButton";

const Home = () => {
  return (
    <section className="w-full h-full flex justify-between flex-row">
      <h1 className="uppercase text-xl">Home</h1>
      <ul className="flex gap-3 z-10">
        <li>
          <Link to="/login">
            <PrimaryButton text="Login" type="button" />
          </Link>
        </li>
        <li>
          <Link to="/register">
            <SecondaryButton text="Register" type="button" />
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Home;
