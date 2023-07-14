import {
  RichTextEditor,
  TextInput,
  UploadFile,
} from "Frontend/common/form-fields/index.js";
import { Alert, Button, ComponentLoader } from "Frontend/common/index.js";
import { useForm } from "react-hook-form";
import { useUploadImage } from "Frontend/utils/hooks/use-upload-image.js";
import { useState } from "react";
import { DrinkEndpoint } from "Frontend/generated/endpoints.js";
import { useLocation, useNavigate } from "react-router-dom";
import useFetch from "Frontend/utils/hooks/index.js";
import Drink from "Frontend/generated/com/lpw/getfed/models/Drink.js";

export default function AddDrink() {
  const [saveLoader, setSaveLoader] = useState<boolean>(false);
  const { control, handleSubmit } = useForm();
  const navigate = useNavigate();

  const {
    state: { id },
  } = useLocation();

  const { data, loading, error } = useFetch<Drink>(async () => {
    return await DrinkEndpoint.getDrinkById(id).then((res) => res);
  }, [id]);

  const onSubmit = async (formData: any) => {
    setSaveLoader(true);
    const imageUrl = formData.image
      ? await useUploadImage(formData.image)
      : data?.image || "";
    DrinkEndpoint.addDrink({
      id: id || undefined,
      label: formData.label || data?.label,
      image: imageUrl,
      price: formData.price || data?.price,
      description: formData.description || data?.description,
    }).then(() => {
      setSaveLoader(false);
      navigate("/admin/managements/drinks");
    });
  };

  if (loading || saveLoader) return <ComponentLoader />;
  if (error)
    return <Alert message={`can't find drink with id: ${id}`} status="error" />;

  return (
    <form className="py-10">
      <div className="flex gap-2">
        <TextInput
          label="Label"
          defaultValue={data?.label}
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
          defaultValue={data?.description}
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
          defaultValue={data?.price}
        />
        <Button
          text="save meal"
          className="rounded-[8px] py-[11px] h-fit"
          onClick={handleSubmit(onSubmit)}
        />
      </div>
    </form>
  );
}
