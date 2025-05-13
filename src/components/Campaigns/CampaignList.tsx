import dotted from "../../assets/dotted_sa_bg.png";
import CampaignTemp from "../CampaignTemp";
import { campaigns } from "../../data/campaignData";

const CampaignsList = () => {
  return (
    <div className="w-full bg-green-900 py-10 relative overflow-hidden font-sans">
      {/* Background Image Positioned Behind Content */}
      <img
        src={dotted}
        alt="wheatbg"
        className="absolute inset-0 w-full h-full object-cover opacity-15 z-0"
      />
      <div className="w-[90%] mx-auto relative z-10 text-white">
        <div className="flex flex-col gap-10">
          <div className=" flex flex-col items-center md:items-start gap-5">
            <p className="font-sans text-center md:text-start font-extralight text-lg">
              Explore our recent campaigns
            </p>
            <hr className="w-20" />
          </div>
          <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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

export default CampaignsList;
