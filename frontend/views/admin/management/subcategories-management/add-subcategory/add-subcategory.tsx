import {
  RichTextEditor,
  TextInput,
  UploadFile,
} from "Frontend/common/form-fields/index.js";
import { Alert, Button, ComponentLoader } from "Frontend/common/index.js";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUploadImage } from "Frontend/utils/hooks/use-upload-image.js";
import { CategoryEndpoint } from "Frontend/generated/endpoints.js";
import useFetch from "Frontend/utils/hooks/index.js";
import SubCategory from "Frontend/generated/com/lpw/getfed/models/SubCategory.js";

export default function AddSubcategory() {
  const [saveLoading, setSaveLoading] = useState<boolean>(false);
  const { control, handleSubmit } = useForm();
  const navigate = useNavigate();

  const {
    state: { id },
  } = useLocation();

  const { data, loading, error } = useFetch<SubCategory>(async () => {
    return await CategoryEndpoint.getSubCategoryById(id).then((res) => res);
  }, [id]);

  const onSubmit = async (formdata: any) => {
    setSaveLoading(true);
    const icon = formdata?.icon
      ? await useUploadImage(formdata.icon).then((res) => res)
      : data?.icon || "";
    const image = formdata?.image
      ? await useUploadImage(formdata.image).then((res) => res)
      : data?.image || "";
    CategoryEndpoint.addSubCategory({
      id: id || undefined,
      title: formdata.title || data?.title,
      label: formdata.label || data?.label,
      image,
      icon,
      price: formdata.price || data?.price,
      description: formdata.description || data?.description,
    }).then(() => {
      setSaveLoading(false);
      navigate("/admin/managements/subcategories");
    });
  };

  if (loading || saveLoading) return <ComponentLoader />;
  if (error)
    return (
      <Alert message={`can't find subcategory with id: ${id}`} status="error" />
    );

  return (
    <div className="py-3">
      <div className="">
        <form className="py-10">
          <div className="flex gap-2">
            <TextInput
              label="Title"
              className=""
              inputClassName="bg-background"
              control={control}
              placeholder="subcategory title?"
              name="title"
              defaultValue={data?.title}
            />
            <UploadFile name="icon" control={control}>
              <div className="group relative flex w-[100%] flex-col gap-2">
                <div className="text-xs font-bold text-cardText sm:text-mb-xbase">
                  Icon
                </div>
                <div className="bg-[#444C56] w-[35vw] flex justify-center transition-all ease-in delay-75 py-[11px] rounded-[8px] text-white hover:bg-[#22272E] ">
                  select photo
                </div>
              </div>
            </UploadFile>
          </div>
          <div className="flex gap-2">
            <TextInput
              label="Label"
              className=""
              inputClassName="bg-background"
              control={control}
              placeholder="sub category label?"
              name="label"
              defaultValue={data?.label}
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
          <div className="flex mb-3">
            <RichTextEditor
              control={control}
              name="description"
              label="Description"
              defaultValue={data?.description}
            />
          </div>
          <div className="flex gap-2 items-center">
            <TextInput
              defaultValue={data?.price}
              type="number"
              label="Price"
              className=""
              inputClassName="bg-background"
              control={control}
              name="price"
            />
            <Button
              text="save sub category"
              className="rounded-[8px] py-[11px] h-fit"
              onClick={handleSubmit(onSubmit)}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
