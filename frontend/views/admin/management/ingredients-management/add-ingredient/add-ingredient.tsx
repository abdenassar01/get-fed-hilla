import {
  DropdownField,
  TextInput,
  UploadFile,
} from "Frontend/common/form-fields/index.js";
import { Button, ComponentLoader } from "Frontend/common/index.js";
import * as React from "react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  CategoryEndpoint,
  IngredientEndpoint,
} from "Frontend/generated/endpoints.js";
import Category from "Frontend/generated/com/lpw/getfed/models/Category.js";
import { useUploadImage } from "Frontend/utils/hooks/use-upload-image.js";

export default function AddIngredient() {
  const [subCategories, setSubCategories] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { control, handleSubmit } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      setLoading(true);
      const result = await CategoryEndpoint.getSubCategories().then(
        (res) => res?.body
      );
      setSubCategories(
        // @ts-ignore
        result.map((item: Category) => ({
          value: item.id,
          label: item.label,
        }))
      );
      setLoading(false);
    }
    getData();
  }, []);

  const onSubmit = async (data: any) => {
    setLoading(true);
    const image = await useUploadImage(data.image).then((res) => res);
    IngredientEndpoint.addIngrediant({
      label: data.label,
      image,
      price: data.price,
      subCategory: {
        id: data.subcategory.value,
      },
    }).then((res) => {
      setLoading(false);
      navigate("/admin/managements/ingredients");
    });
  };

  if (loading) return <ComponentLoader />;

  return (
    <div>
      <div className="">
        <form className="py-10">
          <div className="flex gap-2">
            <TextInput
              label="Label"
              className=""
              inputClassName="bg-background"
              control={control}
              placeholder="ingredient label?"
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
          <div className="flex gap-2">
            <DropdownField
              control={control}
              label="Sub category"
              name="subcategory"
              items={subCategories}
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
          <div className="flex gap-2 items-center">
            <Button
              text="save ingredient"
              className="rounded-[8px] w-full py-[11px] h-fit"
              onClick={handleSubmit(onSubmit)}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
