import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import * as apiClient from "../../apiClient";
import globe from "../../assets/globe.png";
import { Calendar, MapPin } from "lucide-react";

const CampaignDetail = () => {
  const { id } = useParams<{ id: string }>();

  const {
    data: campaign,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["getCampaignById", id],
    queryFn: () => apiClient.getCampaignById(id as string),
    enabled: !!id,
  });

  const campaignData = campaign?.data;
  const formattedDate = campaignData?.date
    ? new Date(campaignData.date).toLocaleDateString()
    : "";

  if (isLoading) {
    return (
      <div className="py-32 text-center text-gray-500">Loading campaign...</div>
    );
  }

  if (error || !campaignData) {
    return (
      <div className="py-32 text-center text-red-500">Campaign not found</div>
    );
  }

  return (
    <div className="w-full pt-24">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[60vh] w-full overflow-hidden">
        <img
          src={campaignData.images?.[0] || globe}
          alt={campaignData.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-4">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-2">
              {campaignData.title}
            </h1>
            <div className="flex items-center justify-center gap-4 text-sm md:text-base text-gray-200">
              <div className="flex items-center gap-1">
                <MapPin size={16} />
                <span>{campaignData.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar size={16} />
                <span>{formattedDate}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="w-[90%] mx-auto py-12 max-w-4xl text-center">
        <p className="text-gray-700 text-lg leading-relaxed">
          {campaignData.description}
        </p>
      </div>

      {/* Optional: Call to Action (CTA) */}
      <div className="w-full bg-blue-50 py-10">
        <div className="w-[90%] mx-auto max-w-4xl text-center">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-blue-900">
            Want to make a difference?
          </h2>
          <p className="text-gray-600 mb-6">
            Join hands with us to support this campaign and bring meaningful
            change.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition">
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetail;
