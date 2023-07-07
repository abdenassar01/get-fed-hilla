import * as React from "react";
import useFetch from "Frontend/utils/use-fetch.js";
import {
  CategoryEndpoint,
  IngredientEndpoint,
} from "Frontend/generated/endpoints.js";
import SubCategory from "Frontend/generated/com/lpw/getfed/models/SubCategory.js";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Loading, RichTextParser } from "Frontend/common/index.js";
import Ingredient from "Frontend/generated/com/lpw/getfed/models/Ingredient.js";

export default function CustomMealIngredients() {
  const [subCategory, setSubCategory] = useState<SubCategory>({});

  const { subCategoryId } = useParams();

  const { data, error, loading, isFetching } = useFetch<
    Ingredient[]
  >(async () => {
    CategoryEndpoint.getSubCategoryById(parseInt(subCategoryId || "1")).then(
      // @ts-ignore
      (res) => setSubCategory(res?.body)
    );

    const res = await IngredientEndpoint.getIngredientBySubCategory(
      parseInt(subCategoryId || "1"),
      0,
      12
    );
    return res?.body;
  }, [subCategoryId]);

  console.log("ingredients: ", data);

  if (loading || isFetching) return <Loading />;
  if (error) return <div>error</div>;

  return (
    <div className="py-12 flex gap-2 ">
      <div className="w-[24vw] rounded-[8px] shadow">
        <div
          style={{ backgroundImage: `url('${subCategory.image}')` }}
          className="w-full rounded-[8px] aspect-square bg-no-repeat bg-cover bg-center"
        />
        <div className="p-2">
          <div className="py-2 flex items-center justify-between font-bold text-secondary">
            <div className="">{subCategory.label}</div>
            <div className="">{subCategory.price} Mad</div>
          </div>
          <RichTextParser text={subCategory.description || ""} className="" />
        </div>
      </div>
    </div>
  );
}