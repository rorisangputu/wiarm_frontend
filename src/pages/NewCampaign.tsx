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
    console.log("inside handle save");
    mutate(campaignFormData);
  };
  return (
    <div className="w-full py-32">
      <ManageCampaignForm onSave={handleSave} isLoading={isPending} />;
    </div>
  );
};

export default NewCampaign;
