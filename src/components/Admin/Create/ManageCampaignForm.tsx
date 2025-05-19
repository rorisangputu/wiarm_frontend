import { useForm, FormProvider } from "react-hook-form";
import { useEffect } from "react";
import AddCampaignForm from "./AddCampaignForm";

export type CampaignFormData = {
  _id?: string;
  title: string;
  description: string;
  date: string;
  location: string;
};

type Props = {
  onSave: (formData: FormData) => void;
  isLoading: boolean;
  campaign?: CampaignFormData;
};

const ManageCampaignForm = ({ onSave, isLoading, campaign }: Props) => {
  const methods = useForm<CampaignFormData>();
  const { handleSubmit, reset } = methods;

  useEffect(() => {
    if (campaign) {
      reset({
        title: campaign.title || "",
        description: campaign.description || "",
        date: campaign.date?.slice(0, 10) || "",
        location: campaign.location || "",
      });
    }
  }, [campaign, reset]);

  const onSubmit = (data: CampaignFormData) => {
    const formData = new FormData();
    if (campaign) {
      formData.append("campaignId", campaign._id as string);
    }
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("date", data.date);
    formData.append("location", data.location);

    // Console log FormData contents
    for (const pair of formData.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }

    onSave(formData);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Reuse your AddCampaignForm here */}
        <AddCampaignForm />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded px-4 py-2 mt-4"
          disabled={isLoading}
        >
          {isLoading ? "Saving..." : "Save Campaign"}
        </button>
      </form>
    </FormProvider>
  );
};

export default ManageCampaignForm;
