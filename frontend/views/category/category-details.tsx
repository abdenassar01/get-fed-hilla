import * as React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Category from "Frontend/generated/com/lpw/getfed/models/Category.js";
import {
  CategoryEndpoint,
  MealEndpoint,
} from "Frontend/generated/endpoints.js";

export default function CategoryDetails() {
  const { category } = useParams();
  const [items, setItems] = useState<Category[]>([]);
  console.log(category);

  useEffect(() => {
    // MealEndpoint.getMealByCategory();
  }, []);

  return <div className="h-[40px] my-20 w-full ">by category: {category}</div>;
}
