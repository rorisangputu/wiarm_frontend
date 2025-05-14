import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAppContext } from "../../../contexts/appContext";
import * as apiClient from "../../../apiClient";
import { CampaignType } from "../../../../../wiarm_backend/src/shared/types"; // Adjust path if needed
import { useForm } from "react-hook-form";

// ✅ Define the input type for the form (not to be confused with FormData API)
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

const AddCampaignForm = ({ onSave, isLoading, campaign }: Props) => {
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
  });

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto bg-white p-6 rounded shadow-md space-y-4"
    >
      <h2 className="text-xl font-semibold text-center">Add New Campaign</h2>

      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 border rounded"
      />

      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 border rounded h-28"
      />

      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 border rounded"
      />

      <input
        type="text"
        name="location"
        placeholder="Location"
        value={formData.location}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 border rounded"
      />

      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={formData.image}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 border rounded"
      />

      <button
        type="submit"
        disabled={mutation.isPending}
        className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800 transition"
      >
        {mutation.isPending ? "Submitting..." : "Create Campaign"}
      </button>
    </form>
  );
};

export default AddCampaignForm;
