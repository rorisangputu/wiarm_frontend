import { useParams } from "react-router-dom";

const EditCampaign = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="py-32">
      <h1 className="text-3xl font-bold">Edit Campaign {id}</h1>
      {/* Add form for editing campaign with ID */}
    </div>
  );
};

export default EditCampaign;
