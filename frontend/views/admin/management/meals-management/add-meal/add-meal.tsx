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
import { Button, ComponentLoader } from "Frontend/common/index.js";
import {
  CategoryEndpoint,
  MealEndpoint,
} from "Frontend/generated/endpoints.js";
import Category from "Frontend/generated/com/lpw/getfed/models/Category.js";
import { useNavigate } from "react-router-dom";

export default function AddMeal() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { control, handleSubmit } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      setLoading(true);
      const result = await CategoryEndpoint.getCategories().then((res) => res);
      setCategories(
        // @ts-ignore
        result
          ?.filter((item) => item?.id !== 0)
          ?.map((item) => ({
            value: item?.id,
            label: item?.label,
          }))
      );
      setLoading(false);
    }
    getData();
  }, []);

  const onSubmit = async (data: any) => {
    setLoading(true);
    const img = await useUploadImage(data.image).then((res) => res);
    MealEndpoint.addMeal({
      title: data.title,
      image: img,
      rating: 5.0,
      price: data.price,
      category: {
        id: data.category.value,
      },
      description: data.description,
      dateCreated: new Date().toISOString(),
      custom: false,
    }).then((res) => {
      setLoading(false);
      navigate("/admin/managements/meals");
    });
  };

  if (loading) return <ComponentLoader />;

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
              control={control}
              label="Category"
              name="category"
              items={categories}
            />
            <TextInput
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
