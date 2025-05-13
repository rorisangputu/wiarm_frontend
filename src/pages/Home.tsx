import Action from "../components/Action";
import AboutSection from "../components/Home/AboutSection";
import BlogCTA from "../components/Home/BlogCTA";
import Campaigns from "../components/Home/Campaigns";
import Hero from "../components/Home/Hero";
import MissionValues from "../components/Home/MissionValues";
import Pillars from "../components/Home/Pillars";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <MissionValues />
      <Pillars />
      <Campaigns />
      <BlogCTA />
      <Action />
    </div>
  );
};

export default Home;
