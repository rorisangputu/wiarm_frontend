import { useNavigate, useParams } from "react-router-dom";
import { useAppContext } from "../contexts/appContext";
import { useMutation, useQuery } from "@tanstack/react-query";
import * as apiClient from "../apiClient";
import ManageCampaignForm from "../components/Admin/Create/ManageCampaignForm";

const EditCampaign = () => {
  const { id } = useParams<{ id: string }>();
  const { showToast } = useAppContext();
  const navigate = useNavigate();

  const { data: campaign } = useQuery({
    queryKey: ["getCampaignById", id],
    queryFn: () => apiClient.getCampaignById(id as string),
    enabled: !!id,
  });
  console.log(campaign);
  const { mutate, isPending } = useMutation({
    mutationFn: apiClient.editCampaign,
    onSuccess: async () => {
      showToast({ message: "Edited Campaign", type: "SUCCESS" });
      navigate("/admin/dashboard");
    },
    onError: (error: Error) => {
      showToast({ message: error.message, type: "ERROR" });
    },
  });

  const handleSave = (campaignFormData: FormData) => {
    console.log("Saving");
    mutate(campaignFormData);
  };

  return (
    <div className="py-32">
      <h1 className="text-3xl font-bold">Edit Campaign {id}</h1>
      {/* Add form for editing campaign with ID */}
      <ManageCampaignForm
        onSave={handleSave}
        isLoading={isPending}
        campaign={campaign?.data}
      />
    </div>
  );
};

export default EditCampaign;
