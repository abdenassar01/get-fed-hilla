import * as React from "react";
import { useState } from "react";
import useFetch from "Frontend/utils/hooks/use-fetch.js";
import {
  CategoryEndpoint,
  IngredientEndpoint,
  MealEndpoint,
} from "Frontend/generated/endpoints.js";
import SubCategory from "Frontend/generated/com/lpw/getfed/models/SubCategory.js";
import { useNavigate, useParams } from "react-router-dom";
import {
  Alert,
  Button,
  Loading,
  RichTextParser,
} from "Frontend/common/index.js";
import Ingredient from "Frontend/generated/com/lpw/getfed/models/Ingredient.js";
import { IngrediantCard } from "Frontend/common/ingredient-card/ingredient-card.js";
import { PackSelector } from "Frontend/common/form-fields/index.js";
import { useForm } from "react-hook-form";
import { useCartStore } from "Frontend/stores/cart-store.js";
import Error from "Frontend/common/error/error.js";

export default function CustomMealIngredients() {
  const [subCategory, setSubCategory] = useState<SubCategory>({});
  const [open, setOpen] = useState<boolean>(false);
  const [saveLoading, setSaveLoading] = useState<boolean>(false);

  const { subCategoryId } = useParams();
  const { control, handleSubmit } = useForm<{ ingredients: Ingredient[] }>();
  const { addMeal } = useCartStore();
  const navigate = useNavigate();

  const { data, error, loading, isFetching } = useFetch<
    Ingredient[]
  >(async () => {
    CategoryEndpoint.getSubCategoryById(parseInt(subCategoryId || "1")).then(
      // @ts-ignore
      (res) => setSubCategory(res)
    );

    return await IngredientEndpoint.getIngredientBySubCategory(
      parseInt(subCategoryId || "1"),
      0,
      12
    );
  }, [subCategoryId]);

  const onSubmit = (formData: { ingredients: Ingredient[] }) => {
    setSaveLoading(true);
    let price = subCategory.price;
    // @ts-ignore
    const ingredients: Ingredient[] = formData?.ingredients?.map((item) => {
      // @ts-ignore
      price += item.price || 0;
      return IngredientEndpoint.addIngrediant(item).then((res) => res);
    });

    MealEndpoint.addMeal({
      custom: true,
      title: subCategory.label,
      price: price,
      image: subCategory.image,
      description: subCategory.description,
    })
      .then((res) =>
        // @ts-ignore
        addMeal(res)
      )
      .then(() => setSaveLoading(false));

    setOpen(true);
    setTimeout(() => navigate("/menu"), 3000);
  };

  const tabs = data?.map((item) => ({
    ingredient: item,
    jsx: (
      <IngrediantCard
        image={item.image}
        label={item.label}
        price={item.price}
        id={item.id}
        key={`ingredient-${item.id}`}
      />
    ),
  }));

  if (loading || isFetching || saveLoading) return <Loading />;
  if (error) return <Error />;

  return (
    <div className="py-12 flex gap-2 ">
      <Alert
        message="Your meal has been added successfully"
        status="success"
        open={open}
      />
      <div className="w-[24vw] ">
        <div
          style={{ backgroundImage: `url('${subCategory.image}')` }}
          className="w-full bg-white rounded-[8px] aspect-square bg-no-repeat bg-cover bg-center"
        />
        <div className="p-2">
          <div className="py-2 flex items-center justify-between font-bold text-secondary">
            <div className="">{subCategory.label}</div>
            <div className="">{subCategory.price} Mad</div>
          </div>
          <RichTextParser text={subCategory.description || ""} className="" />
        </div>
      </div>
      <div className="">
        <PackSelector
          control={control}
          name="ingredients"
          label=""
          tabs={tabs}
          wrapperClassName="grid grid-cols-4 gap-4"
        />
        <div className="w-full flex justify-end">
          <Button text="Next" onClick={handleSubmit(onSubmit)} />
        </div>
      </div>
    </div>
  );
}
