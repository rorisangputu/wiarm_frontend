import { useFormContext, Controller } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { CampaignFormData } from "./Admin/Create/ManageCampaignForm";

const modules = {
  toolbar: [
    ["bold", "italic", "underline", "strike"],
    ["blockquote", "code-block"],
    ["link", "image", "video", "formula"],
    [{ header: 1 }, { header: 2 }],
    [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
    [{ script: "sub" }, { script: "super" }],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ direction: "rtl" }],
    [{ size: ["small", false, "large", "huge"] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ color: [] }, { background: [] }],
    [{ font: [] }],
    [{ align: [] }],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];

const Editor = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<CampaignFormData>();

  return (
    <div className="mt-3">
      <Controller
        name="description"
        control={control}
        rules={{ required: "This field is required" }}
        render={({ field }) => (
          <ReactQuill
            {...field}
            onChange={field.onChange}
            value={field.value || ""}
            modules={modules}
            formats={formats}
            className="border rounded w-full py-2 px-2 font-normal"
          />
        )}
      />
      {errors.description && (
        <span className="text-red-700">{errors.description.message}</span>
      )}
    </div>
  );
};

export default Editor;
