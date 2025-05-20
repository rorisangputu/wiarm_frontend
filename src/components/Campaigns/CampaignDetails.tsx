import { useParams } from "react-router-dom";
import { campaigns } from "../../data/campaignData"; // or extract into a separate data file

const CampaignDetail = () => {
  const { id } = useParams();
  const campaign = campaigns.find((c) => c.id === parseInt(id as string));

  if (!campaign) return <div className="p-10">Campaign not found</div>;

  return (
    <div className="w-[90%] mx-auto py-10">
      <img
        src={campaign.picture}
        alt={campaign.title}
        className="w-full h-64 object-cover rounded mb-6"
      />
      <h1 className="text-3xl font-semibold text-green-800">
        {campaign.title}
      </h1>
      <p className="text-sm text-gray-600 mb-2">
        {campaign.location} — {campaign.date}
      </p>
      <p className="text-gray-700 leading-relaxed mt-4 whitespace-pre-wrap">
        {campaign.description}
      </p>
    </div>
  );
};

export default CampaignDetail;
