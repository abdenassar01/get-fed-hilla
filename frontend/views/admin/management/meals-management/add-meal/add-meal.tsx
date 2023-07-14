import * as React from "react";
import { useUploadImage } from "Frontend/utils/hooks/use-upload-image.js";
import { useEffect, useState } from "react";
import {
  DropdownField,
  RichTextEditor,
  TextInput,
  UploadFile,
} from "Frontend/common/form-fields/index.js";
import { useForm } from "react-hook-form";
import { Alert, Button, ComponentLoader } from "Frontend/common/index.js";
import {
  CategoryEndpoint,
  MealEndpoint,
} from "Frontend/generated/endpoints.js";
import { useLocation, useNavigate } from "react-router-dom";
import useFetch from "Frontend/utils/hooks/index.js";
import Meal from "Frontend/generated/com/lpw/getfed/models/Meal.js";

export default function AddMeal() {
  const [categories, setCategories] = useState<any>([]);
  const [saveLoading, setSaveLoading] = useState<boolean>(false);
  const { control, handleSubmit } = useForm();
  const navigate = useNavigate();

  const {
    state: { id },
  } = useLocation();

  useEffect(() => {
    async function getData() {
      setSaveLoading(true);
      const result = await CategoryEndpoint.getCategories().then((res) => res);
      setCategories(
        result
          ?.filter((item) => item?.id !== 0)
          ?.map((item) => ({
            value: item?.id,
            label: item?.label,
          }))
      );
      setSaveLoading(false);
    }
    getData();
  }, []);

  const { data, loading, error } = useFetch<Meal>(async () => {
    return await MealEndpoint.getMealById(id).then((res) => res);
  }, [id]);

  const onSubmit = async (formdata: any) => {
    setSaveLoading(true);
    const image = formdata?.image
      ? await useUploadImage(formdata.image).then((res) => res)
      : data?.image || "";
    MealEndpoint.addMeal({
      id: id || undefined,
      title: formdata.title || data?.title,
      image,
      rating: 5.0 || data?.rating,
      price: formdata.price || data?.price,
      category: {
        id: formdata.category.value || data?.category?.id,
      },
      description: formdata.description || data?.description,
      dateCreated: new Date().toISOString() || data?.dateCreated,
      custom: false,
    }).then((res) => {
      setSaveLoading(false);
      navigate("/admin/managements/meals");
    });
  };

  if (loading || saveLoading) return <ComponentLoader />;
  if (error)
    return <Alert message={`can't get meal with id: ${id}`} status="error" />;

  return (
    <div>
      <div className="">
        <form className="py-10">
          <div className="flex gap-2">
            <TextInput
              label="Title"
              className=""
              inputClassName="bg-background"
              control={control}
              placeholder="meal title?"
              name="title"
              defaultValue={data?.title}
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
          <div className="flex gap-2">
            <DropdownField
              defaultValue={data?.category?.label}
              control={control}
              label="Category"
              name="category"
              items={categories}
            />
            <TextInput
              defaultValue={data?.price}
              type="number"
              label="Price"
              className=""
              inputClassName="bg-background"
              control={control}
              name="price"
            />
          </div>
          <div className="flex mb-3">
            <RichTextEditor
              control={control}
              name="description"
              label="Description"
            />
          </div>
          <div className="flex gap-2 items-center">
            <Button
              text="save meal"
              className="rounded-[8px] py-[11px] h-fit"
              onClick={handleSubmit(onSubmit)}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
