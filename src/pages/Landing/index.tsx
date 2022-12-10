import Hero from "../../components/Landing/Hero";
import Introduction from "../../components/Landing/Introduction";
import MainConcept from "../../components/Landing/MainConcept";
import HowToUse from "../../components/Landing/HowToUse";

const Landing = () => {
  return (
    <div>
      <Hero />
      <Introduction />
      <MainConcept />
      <HowToUse />
    </div>
  );
};

export default Landing;
