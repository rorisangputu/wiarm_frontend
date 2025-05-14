import { Link } from "react-router-dom";

interface AdminCampaignProps {
  id: string;
  title: string;
  location: string;
  date: Date; // assuming string from API
  description: string;
  picture: string;
  //onDelete: (id: string) => void;
}

const AdminCampaignTemp = ({
  id,
  title,
  location,
  date,
  description,
  picture,
}: AdminCampaignProps) => {
  return (
    <div className="bg-white rounded shadow-md text-black overflow-hidden">
      <img src={picture} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">
          {location} — {new Date(date).toLocaleDateString()}
        </p>
        <p className="text-sm text-gray-700">
          {description.substring(0, 100)}...
        </p>

        <div className="flex gap-4 mt-4">
          <Link
            to={`/admin/edit-campaign/${id}`}
            className="text-blue-600 hover:underline"
          >
            Edit
          </Link>
          <button className="text-red-600 hover:underline">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default AdminCampaignTemp;
