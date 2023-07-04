import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import CallToAction from "./Sections/CTA";
import Features from "./Sections/Features";
import Landing from "./Sections/Landing";

const Home = () => {
  return (
    <>
      <Header />
      <Landing />
      <Features />
      <CallToAction />
      <Footer />
    </>
  );
};

export default Home;
