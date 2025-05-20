import { useFormContext } from "react-hook-form";
import { CampaignFormData } from "./ManageCampaignForm";
// ✅ Define the input type for the form (not to be confused with FormData API)

const CampaignForm = () => {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext<CampaignFormData>();

  const existingImageUrls = watch("images");

  const handleDelete = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    imageUrl: string
  ) => {
    event.preventDefault();
    setValue(
      "images",
      existingImageUrls.filter((url) => url !== imageUrl)
    );
  };

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
      <label htmlFor="" className="flex flex-col mt-5">
        Description
        <textarea
          rows={7}
          
          id="title"
          className="border rounded w-full py-2 px-2 mt-3 font-normal"
          {...register("description", { required: "This field is required" })}
        />
        {errors.description && (
          <span className="text-red-700">{errors.description.message}</span>
        )}
      </label>

      <label htmlFor="" className="flex flex-col mt-5">
        Date
        <input
          type="date"
          id="date"
          className="border rounded w-full py-2 px-2 mt-3 font-normal"
          {...register("date", { required: "This field is required" })}
        />
        {errors.date && (
          <span className="text-red-700">{errors.date.message}</span>
        )}
      </label>

      <label htmlFor="" className="flex flex-col mt-5">
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
      <div className="flex flex-col mt-5">
        <h2 className="mb-3">Images</h2>
        <div className="border rounded p-4 flex flex-col gap-4">
          {existingImageUrls && (
            <div className="grid grid-cols-6 gap-4">
              {existingImageUrls.map((url) => (
                <div className="relative group" key={url}>
                  <img src={url} className="min-h-full object-cover" alt="" />
                  <button
                    onClick={(event) => handleDelete(event, url)}
                    className="absolute inset-0 flex items-center justify-center
                    bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 text-white"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          )}
          <input
            type="file"
            multiple
            accept="image/*"
            className="w-full text-gray-700 font-normal"
            {...register("imageFiles", {
              validate: (imageFiles) => {
                //for editing campaign
                const totalLength =
                  imageFiles.length + (existingImageUrls?.length || 0);
                if (totalLength === 0) {
                  return "At least one image should be added";
                }
                if (totalLength > 6) {
                  return "Images cannot be more than six (6)";
                }
              },
            })}
          />
        </div>
        {errors.imageFiles && (
          <span className="text-red-700 ">{errors.imageFiles.message}</span>
        )}
      </div>
    </div>
  );
};

export default CampaignForm;
