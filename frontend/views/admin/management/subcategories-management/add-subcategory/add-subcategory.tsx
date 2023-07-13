import {
  RichTextEditor,
  TextInput,
  UploadFile,
} from "Frontend/common/form-fields/index.js";
import { Button, ComponentLoader } from "Frontend/common/index.js";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUploadImage } from "Frontend/utils/hooks/use-upload-image.js";
import { CategoryEndpoint } from "Frontend/generated/endpoints.js";

export default function AddSubcategory() {
  const [loading, setLoading] = useState<boolean>(false);
  const { control, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    setLoading(true);
    const icon = await useUploadImage(data.icon).then((res) => res);
    const image = await useUploadImage(data.image).then((res) => res);
    CategoryEndpoint.addSubCategory({
      title: data.title,
      label: data.label,
      image,
      icon,
      price: data.price,
      description: data.description,
    }).then(() => {
      setLoading(false);
      navigate("/admin/managements/subcategories");
    });
  };

  if (loading) return <ComponentLoader />;

  return (
    <div className="py-3">
      <div className="">
        <form className="py-10">
          <div className="flex gap-2">
            <TextInput
              label="Title"
              className=""
              inputClassName="bg-background"
              control={control}
              placeholder="subcategory title?"
              name="title"
            />
            <UploadFile name="icon" control={control}>
              <div className="group relative flex w-[100%] flex-col gap-2">
                <div className="text-xs font-bold text-cardText sm:text-mb-xbase">
                  Icon
                </div>
                <div className="bg-[#444C56] w-[35vw] flex justify-center transition-all ease-in delay-75 py-[11px] rounded-[8px] text-white hover:bg-[#22272E] ">
                  select photo
                </div>
              </div>
            </UploadFile>
          </div>
          <div className="flex gap-2">
            <TextInput
              label="Label"
              className=""
              inputClassName="bg-background"
              control={control}
              placeholder="sub category label?"
              name="label"
            />
            <UploadFile name="image" control={control}>
              <div className="group relative flex w-[100%] flex-col gap-2">
                <div className="text-xs font-bold text-cardText sm:text-mb-xbase">
                  Image
                </div>
                <div className="bg-[#444C56] w-[35vw] flex justify-center transition-all ease-in delay-75 py-[11px] rounded-[8px] text-white hover:bg-[#22272E] ">
                  select photo
                </div>
              </div>
            </UploadFile>
          </div>
          <div className="flex mb-3">
            <RichTextEditor
              control={control}
              name="description"
              label="Description"
            />
          </div>
          <div className="flex gap-2 items-center">
            <TextInput
              type="number"
              label="Price"
              className=""
              inputClassName="bg-background"
              control={control}
              name="price"
            />
            <Button
              text="save meal"
              className="rounded-[8px] w-[65vw] py-[11px] h-fit"
              onClick={handleSubmit(onSubmit)}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
