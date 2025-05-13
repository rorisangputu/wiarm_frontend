import { Link } from "react-router-dom";

interface templateProps {
  id: string;
  title: string;
  location: string;
  date: string;
  description: string;
  picture: string;
}
const CampaignTemp = ({
  id,
  title,
  location,
  date,
  description,
  picture,
}: templateProps) => {
  return (
    <div className="bg-white rounded shadow-md text-black overflow-hidden">
      <img src={picture} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
        <p className="text-sm md:text-md text-gray-600">
          {location} — {date}
        </p>
        <p className="text-sm md:text-md text-gray-700">
          {description.substring(0, 100)}...
        </p>
        <Link
          to={`/campaigns/${id}`}
          className="text-green-700 font-medium hover:underline mt-2"
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default CampaignTemp;
