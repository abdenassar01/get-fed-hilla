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
import { Button } from "Frontend/common/index.js";
import { CategoryEndpoint } from "Frontend/generated/endpoints.js";
import Category from "Frontend/generated/com/lpw/getfed/models/Category.js";

export default function AddMeal() {
  const [file, setFile] = useState();
  const [categories, setCategories] = useState([]);
  const { control, handleSubmit } = useForm();

  useEffect(() => {
    async function getData() {
      const result = await CategoryEndpoint.getCategories().then(
        (res) => res?.body
      );
      console.log(result);
      setCategories(
        // @ts-ignore
        result
          .filter((item: Category) => item.id !== 0)
          .map((item: Category) => ({
            value: item.id,
            label: item.label,
          }))
      );
    }
    getData();
  }, []);

  const onFileChange = (event: any) => {
    // @ts-ignore
    setFile(event.target.files[0]);
  };
  const onFileUpload = () => {
    useUploadImage(file).then((res) => console.log(res));
  };

  const onSubmit = (data: any) => {
    console.log(data);
  };

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
              type="date"
              label="Title"
              className=""
              inputClassName="bg-background"
              control={control}
              name="date"
            />
          </div>
          <div className="flex">
            <RichTextEditor
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
            />
            <Button
              text="save meal"
              className="rounded-[8px] w-[65vw] py-[11px] h-fit"
              onClick={handleSubmit(onSubmit)}
            />
          </div>
        </form>
        add meal page
        <input name="file" type="file" onChange={onFileChange} />
        <button onClick={onFileUpload}>Upload</button>
      </div>
    </div>
  );
}
