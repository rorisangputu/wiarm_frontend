import { useFormContext } from "react-hook-form";
import { CampaignFormData } from "./ManageCampaignForm";
// ✅ Define the input type for the form (not to be confused with FormData API)

const AddCampaignForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<CampaignFormData>();

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow-md space-y-4">
      <h2 className="text-xl font-semibold text-center">Add New Campaign</h2>

      <label htmlFor="">
        Name
        <input
          type="text"
          id="title"
          className="border rounded w-full py-2 px-2 mt-3 font-normal"
          {...register("title", { required: "This field is required" })}
        />
        {errors.title && (
          <span className="text-red-700">{errors.title.message}</span>
        )}
      </label>

      <label htmlFor="" className="text-gray-700 text-sm font-bold flex-1">
        Description
        <textarea
          id="description"
          rows={10}
          className="border rounded w-full py-2 px-2 mt-3 font-normal"
          {...register("description", { required: "This field is required" })}
        />
        {errors.description && (
          <span className="text-red-700">{errors.description.message}</span>
        )}
      </label>

      <label htmlFor="">
        Date
        <input
          type="date"
          id="date"
          className="border rounded w-full py-2 px-2 mt-3 font-normal"
          {...register("location", { required: "This field is required" })}
        />
        {errors.date && (
          <span className="text-red-700">{errors.date.message}</span>
        )}
      </label>

      <label htmlFor="">
        Location
        <input
          type="text"
          id="location"
          className="border rounded w-full py-2 px-2 mt-3 font-normal"
          {...register("location", { required: "This field is required" })}
        />
        {errors.location && (
          <span className="text-red-700">{errors.location.message}</span>
        )}
      </label>
    </div>
  );
};

export default AddCampaignForm;
