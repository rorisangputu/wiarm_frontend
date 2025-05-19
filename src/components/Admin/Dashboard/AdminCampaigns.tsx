import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAppContext } from "../../../contexts/appContext";
import * as apiClient from "../../../apiClient";
import Button from "../../Button";
import AdminCampaignTemp from "./AdminCampaignTemp";
import { Link } from "react-router-dom";

const AdminCampaigns = () => {
  const { showToast } = useAppContext();
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: apiClient.deleteCampaign,
    onSuccess: () => {
      showToast({ message: "Campaign Deleted", type: "SUCCESS" });
      queryClient.invalidateQueries({ queryKey: ["getCampaigns"] });
    },
    onError: (error: Error) => {
      showToast({ message: error.message, type: "ERROR" });
    },
  });
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

  const handleDelete = async (id: string) => {
    console.log("Inside handle Delete");
    mutate(id);
    console.log("After delete mutate");
  };

  if (!campaignData || campaignData.length === 0) {
    return <span>No Campaigns found.</span>;
  }

  return (
    <div className="flex flex-col gap-5">
      <Link to={"/admin/new"}>
        <Button text="Add Campaign" styles="font-medium " />
      </Link>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {campaignData.map((campaign) => (
          <AdminCampaignTemp
            key={campaign._id}
            id={campaign._id}
            title={campaign.title}
            location={campaign.location}
            date={campaign.date}
            description={campaign.description}
            picture={campaign.image}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default AdminCampaigns;
