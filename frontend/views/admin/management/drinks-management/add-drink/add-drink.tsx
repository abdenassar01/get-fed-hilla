import {
  RichTextEditor,
  TextInput,
  UploadFile,
} from "Frontend/common/form-fields/index.js";
import { Button, ComponentLoader } from "Frontend/common/index.js";
import * as React from "react";
import { useForm } from "react-hook-form";
import { useUploadImage } from "Frontend/utils/hooks/use-upload-image.js";
import { useState } from "react";
import { DrinkEndpoint } from "Frontend/generated/endpoints.js";
import { useNavigate } from "react-router-dom";

export default function AddDrink() {
  const [loading, setLoading] = useState<boolean>(false);
  const { control, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    setLoading(true);
    const imageUrl = await useUploadImage(data.image);
    DrinkEndpoint.addDrink({
      label: data.label,
      image: imageUrl,
      price: data.price,
      description: data.description,
    }).then(() => {
      setLoading(false);
      navigate("/admin/managements/drinks");
    });
  };

  if (loading) return <ComponentLoader />;

  return (
    <form className="py-10">
      <div className="flex gap-2">
        <TextInput
          label="Label"
          className=""
          inputClassName="bg-background"
          control={control}
          placeholder="drink label?"
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
  );
}
