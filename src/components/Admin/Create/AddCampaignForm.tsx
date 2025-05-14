import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAppContext } from "../../../contexts/appContext";
import * as apiClient from "../../../apiClient";
import { CampaignType } from "../../../../../wiarm_backend/src/shared/types"; // Adjust path if needed

// ✅ Define the input type for the form (not to be confused with FormData API)
interface CampaignFormInput {
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
}

const AddCampaignForm = () => {
  const { showToast } = useAppContext();
  const queryClient = useQueryClient();

  const [formData, setFormData] = useState<CampaignFormInput>({
    title: "",
    description: "",
    date: "",
    location: "",
    image: "",
  });

  const mutation = useMutation<CampaignType, Error, FormData>({
    mutationFn: apiClient.createCampaign,
    onSuccess: () => {
      showToast({ message: "Campaign created successfully!", type: "SUCCESS" });
      queryClient.invalidateQueries({ queryKey: ["getCampaigns"] });
      setFormData({
        title: "",
        description: "",
        date: "",
        location: "",
        image: "",
      });
    },
    onError: () => {
      showToast({ message: "Failed to create campaign.", type: "ERROR" });
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("date", formData.date);
    formDataToSend.append("location", formData.location);
    formDataToSend.append("image", formData.image); // if it's a file input, use event.target.files[0]

    mutation.mutate(formDataToSend);
  };

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
