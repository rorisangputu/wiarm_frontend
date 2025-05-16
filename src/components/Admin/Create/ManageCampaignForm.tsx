import { FormProvider, useForm } from "react-hook-form";
import { CampaignType } from "../../../../../wiarm_backend/src/shared/types";
import { useEffect } from "react";
import AddCampaignForm from "./AddCampaignForm";

export type CampaignFormData = {
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
};

type Props = {
  onSave: (CampaignFormData: FormData) => void;
  isLoading: boolean;
  campaign?: CampaignType;
};

const ManageCampaignForm = ({ onSave, isLoading, campaign }: Props) => {
  const formMethods = useForm<CampaignFormData>();
  const { handleSubmit, reset } = formMethods;

  useEffect(() => {
    reset(campaign);
  }, [campaign, reset]);

  const onSubmit = handleSubmit((formDataJSON: CampaignFormData) => {
    const formData = new FormData();
    if (campaign) {
      formData.append("campaignId", campaign._id);
    }
    formData.append("title", formDataJSON.title);
    formData.append("description", formDataJSON.description);
    formData.append("location", formDataJSON.location);
    formData.append("date", formDataJSON.date);

    console.log(JSON.stringify(formData));
    onSave(formData);
  });
  return (
    <FormProvider {...formMethods}>
      <form onSubmit={onSubmit} className="flex flex-col gap-10">
        <AddCampaignForm />
        <span className="flex justify-end">
          <button
            disabled={isLoading}
            type="submit"
            className="p-3 text-white bg-blue-700 hover:bg-blue-600 disabled:bg-gray-400 font-semibold text-xl"
          >
            {isLoading ? "Saving..." : "Save"}
          </button>
        </span>
      </form>
    </FormProvider>
  );
};

export default ManageCampaignForm;
