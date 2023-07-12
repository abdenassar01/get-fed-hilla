import * as React from "react";
import { useState } from "react";
import { useUploadImage } from "Frontend/utils/hooks/use-upload-image.js";
import useFetch from "Frontend/utils/hooks/index.js";
import Meal from "Frontend/generated/com/lpw/getfed/models/Meal.js";
import { MealEndpoint } from "Frontend/generated/endpoints.js";
import { DataTable, Loading } from "Frontend/common/index.js";
import Error from "Frontend/common/error/error.js";

export default function MealsManagement() {
  const [file, setFile] = useState();

  const { data, loading, error } = useFetch<Meal[]>(async () => {
    // MealEndpoint.addMeal({
    //   price: 20,
    //   title: "Pizza Piberonni",
    //   description: "very long description",
    //   image: "img.png",
    //   category: {
    //     id: 2,
    //   },
    //   rating: 5.0,
    //   custom: false,
    //   dateCreated: new Date().toISOString(),
    // }).then((res) => console.log("added meal: ", res));

    const res = await MealEndpoint.getMeals(0, 20);
    console.log(res);
    return res?.body;
  }, []);
  console.log("data ready", data);
  const onFileChange = (event: any) => {
    // @ts-ignore
    setFile(event.target.files[0]);
  };
  const onFileUpload = () => {
    useUploadImage(file).then((res) => console.log(res));
  };

  const header = [
    "title",
    "description",
    "date created",
    "price",
    "rating",
    "category",
  ];

  if (loading) return <Loading size={10} />;
  if (error) return <Error />;

  return (
    <div className="">
      <div className="text-xbase font-bold text-cardText sm:text-[5.340vw]">
        Meals
      </div>
      <div className="w-full">
        {data && <DataTable header={header} data={data} />}
        <input name="file" type="file" onChange={onFileChange} />
        <button onClick={onFileUpload}>Upload</button>
      </div>
    </div>
  );
}
