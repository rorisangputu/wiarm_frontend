import dotted from "../../assets/dotted_sa_bg.png";
import CampaignTemp from "../CampaignTemp";
import { useAppContext } from "../../contexts/appContext";
import { useQuery } from "@tanstack/react-query";
import * as apiClient from "../../apiClient";
const CampaignsList = () => {
  const { showToast } = useAppContext();
  const { data: campaignData } = useQuery({
    queryKey: ["getCampaigns"],
    queryFn: async () => {
      try {
        return await apiClient.fetchCampaigns();
      } catch (error) {
        showToast({ message: "Couldn't get Campaigns", type: "ERROR" });
        throw error;
      }
    },
  });

  if (!campaignData) {
    return <span>No Campaigns found.</span>;
  }

  //console.log(campaignData.data);
  return (
    <div className="w-full bg-slate-50 py-10 relative overflow-hidden font-sans">
      {/* Background Image Positioned Behind Content */}
      <img
        src={dotted}
        alt="wheatbg"
        className="absolute inset-0 w-full h-full object-cover opacity-15 z-0"
      />
      <div className="w-[90%] mx-auto relative z-10 text-white">
        <div className="flex flex-col gap-10">
          <div className=" flex flex-col items-center md:items-start gap-5">
            <p className="font-sans text-center md:text-start font-medium text-xl text-green-900">
              Explore our recent campaigns
            </p>
            <hr className="w-20 text-green-900" />
          </div>
          <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {campaignData.map((campaign) => (
              <CampaignTemp
                key={campaign._id}
                id={campaign._id}
                title={campaign.title}
                location={campaign.location}
                date={campaign.date}
                description={campaign.description}
                picture={campaign.images}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignsList;
