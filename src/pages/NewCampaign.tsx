import { useMutation } from "@tanstack/react-query";
import ManageCampaignForm from "../components/Admin/Create/ManageCampaignForm";
import * as apiClient from "../apiClient";
import { useAppContext } from "../contexts/appContext";

const NewCampaign = () => {
  const { showToast } = useAppContext();
  const { mutate, isPending } = useMutation({
    mutationFn: apiClient.createCampaign,
    onSuccess: async () => {
      showToast({ message: "Created Campaign", type: "SUCCESS" });
    },
    onError: (error: Error) => {
      showToast({ message: error.message, type: "ERROR" });
    },
  });

  const handleSave = (campaignFormData: FormData) => {
    mutate(campaignFormData);
  };
  return <ManageCampaignForm onSave={handleSave} isLoading={isPending} />;
};

export default NewCampaign;
