import {
  DropdownField,
  TextInput,
  UploadFile,
} from "Frontend/common/form-fields/index.js";
import { Button, ComponentLoader } from "Frontend/common/index.js";
import * as React from "react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import {
  CategoryEndpoint,
  DrinkEndpoint,
  IngredientEndpoint,
} from "Frontend/generated/endpoints.js";
import Category from "Frontend/generated/com/lpw/getfed/models/Category.js";
import { useUploadImage } from "Frontend/utils/hooks/use-upload-image.js";
import useFetch from "Frontend/utils/hooks/index.js";
import Drink from "Frontend/generated/com/lpw/getfed/models/Drink.js";
import Ingredient from "Frontend/generated/com/lpw/getfed/models/Ingredient.js";
import Error from "Frontend/common/error/error.js";

export default function AddIngredient() {
  const [subCategories, setSubCategories] = useState([]);
  const [saveLoading, setSaveLoading] = useState<boolean>(false);
  const { control, handleSubmit } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      setSaveLoading(true);
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
      setSaveLoading(false);
    }
    getData();
  }, []);

  const {
    state: { id },
  } = useLocation();

  const { data, loading, error } = useFetch<Ingredient>(async () => {
    return await IngredientEndpoint.getIngrediantById(id).then(
      (res) => res?.body
    );
  }, [id]);

  const onSubmit = async (formdata: any) => {
    setSaveLoading(true);
    const image = formdata?.image
      ? await useUploadImage(formdata.image).then((res) => res)
      : data?.image || "";
    IngredientEndpoint.addIngrediant({
      label: formdata.label || data?.label,
      image,
      price: formdata.price || data?.price,
      subCategory: {
        id: formdata.subcategory.value || data?.subCategory?.id,
      },
    }).then((res) => {
      setSaveLoading(false);
      navigate("/admin/managements/ingredients");
    });
  };

  if (loading || saveLoading) return <ComponentLoader />;
  if (error) return <Error />;

  return (
    <div>
      <div className="">
        <form className="py-10">
          <div className="flex gap-2">
            <TextInput
              defaultValue={data?.label}
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
              defaultValue={data?.subCategory?.label}
              control={control}
              label="Sub category"
              name="subcategory"
              items={subCategories}
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
