import dotted from "../../assets/dotted_sa_bg.png";
import women from "../../assets/two_women_farming.jpg";
import mulch from "../../assets/mulch_farming.webp";
import sov from "../../assets/sov_food.jpg";
import BlackButton from "../BlackButton";
import CampaignTemp from "../CampaignTemp";
import { Link } from "react-router-dom";

const Campaigns = () => {
  return (
    <div className="w-full bg-green-900 py-10 relative overflow-hidden">
      {/* Background Image Positioned Behind Content */}
      <img
        src={dotted}
        alt="wheatbg"
        className="absolute inset-0 w-full h-full object-cover opacity-15 z-0"
      />
      <div className="w-[90%] mx-auto relative z-10 text-white">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col">
            <div className="flex items-center gap-4 justify-center mb-2">
              <hr className="w-16 border-t-2 border-[#cecece]" />
              <h1 className="uppercase font-normal tracking-[0.2em] text-white md:text-lg">
                Our campaigns
              </h1>
              <hr className="w-16 border-t-2 border-[#cecece]" />
            </div>
            <div className="text-center flex flex-col gap-5">
              <h2 className="capitalize text-3xl md:text-4xl  text-white font-medium">
                Some of our recent campaigns that helped touch lives
              </h2>
              <p className="font-extralight text-lg md:text-xl">
                These are our most recent campaigns
              </p>
              <div className="flex justify-center">
                <Link to={`/campaigns`}>
                  <BlackButton text={"View all campaigns"} />
                </Link>
              </div>
            </div>
          </div>
          <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:pt-8">
            {campaigns.map((campaign) => (
              <CampaignTemp
                key={campaign.id}
                id={campaign.id}
                title={campaign.title}
                location={campaign.location}
                date={campaign.date}
                description={campaign.description}
                picture={campaign.picture}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campaigns;

const campaigns = [
  {
    id: "1",
    title: "Seeds of Resistance",
    location: "Eastern Cape, RSA",
    date: "March 20, 2025",
    description:
      "This campaign brings together women farmers to reclaim ancestral land...",
    picture: women,
  },
  {
    id: "2",
    title: "Harvesting Dignity Mission",
    location: "KwaZulu-Natal",
    date: "May 10, 2025",
    description:
      "Focused on building food sovereignty, this project supports women-led cooperatives...",
    picture: sov,
  },
  {
    id: "3",
    title: "Agri-Education for Liberation",
    location: "Venda, Limpopo",
    date: "March 20, 2025",
    description:
      "This campaign empowers women through education, soil healing workshops...",
    picture: mulch,
  },
];
