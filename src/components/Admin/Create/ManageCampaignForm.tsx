import { useForm, FormProvider } from "react-hook-form";
import { useEffect } from "react";
import CampaignForm from "./CampaignForm";

export type CampaignFormData = {
  _id?: string;
  title: string;
  description: string;
  date: Date;
  location: string;
  images: string[];
  imageFiles: FileList;
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
        date: campaign.date || "",
        location: campaign.location || "",
        images: campaign.images || [], // ✅ Add this
        imageFiles: {} as FileList, // ✅ Add this if needed
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
    formData.append("date", data.date.toISOString().slice(0, 10));
    formData.append("location", data.location);

    //For Edit Campaign
    if (data.images) {
      data.images.forEach((url, index) => {
        formData.append(`images[${index}]`, url);
      });
    }

    //For Add Campaign
    Array.from(data.imageFiles).forEach((imageFile) => {
      formData.append(`imageFiles`, imageFile);
    });

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
        <CampaignForm />
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
