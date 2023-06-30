import * as React from "react";
import { useParams } from "react-router-dom";

export default function CategoryDetails() {
  const { category } = useParams();
  console.log(category);
  return <div className="h-[40px] my-20 w-full ">by category</div>;
}
