import CampaignsList from "../components/Campaigns/CampaignList";
import Hero from "../components/Campaigns/Hero";
import Involved from "../components/Campaigns/Involved";
const Campaigns = () => {
  return (
    <div>
      <Hero />
      <CampaignsList />
      <Involved />
    </div>
  );
};

export default Campaigns;
