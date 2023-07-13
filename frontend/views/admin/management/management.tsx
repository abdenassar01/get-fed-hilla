import * as React from "react";
import { useEffect, useState } from "react";
import { useUploadImage } from "Frontend/utils/hooks/use-upload-image.js";
import { NoStyleLink } from "Frontend/common/no-style-link/no-style-link.js";
import { Outlet, useNavigate } from "react-router-dom";

export default function Management() {
  const [file, setFile] = useState();

  const navigate = useNavigate();
  const onFileChange = (event: any) => {
    // @ts-ignore
    setFile(event.target.files[0]);
  };
  const onFileUpload = () => {
    useUploadImage(file).then((res) => console.log(res));
  };

  useEffect(() => {
    navigate("/admin/managements/meals");
  }, []);
  return (
    <div className="w-full min-h-[120%]">
      <div className="flex gap-4 bg-background pl-6">
        <NoStyleLink
          className="relative block h-full rounded-ss-[8px] rounded-se-[8px] whitespace-nowrap p-[1vw]"
          activeClassName="prose-em:block bg-white tab-link-active text-[#2D54DE]  font-normal sm:border-l-0 sm:border-b-[4px]"
          link="/admin/managements/meals"
        >
          <em className="hidden absolute w-[24px] h-[24px] left-[-24px] bottom-0 bg-white" />
          meals
          <em className="hidden absolute w-[24px] h-[24px] right-[-24px] bottom-0 bg-white" />
        </NoStyleLink>
        <NoStyleLink
          className="relative block h-full rounded-ss-[8px] rounded-se-[8px] whitespace-nowrap p-[1vw]"
          activeClassName="prose-em:block bg-white tab-link-active text-[#2D54DE]  font-normal sm:border-l-0 sm:border-b-[4px]"
          link="/admin/managements/drinks"
        >
          <em className="hidden absolute w-[24px] h-[24px] left-[-24px] bottom-0 bg-white" />
          drinks
          <em className="hidden absolute w-[24px] h-[24px] right-[-24px] bottom-0 bg-white" />
        </NoStyleLink>
        <NoStyleLink
          className="relative block h-full rounded-ss-[8px] rounded-se-[8px] whitespace-nowrap p-[1vw]"
          activeClassName="prose-em:block bg-white tab-link-active text-[#2D54DE]  font-normal sm:border-l-0 sm:border-b-[4px]"
          link="/admin/managements/subcategories"
        >
          <em className="hidden absolute w-[24px] h-[24px] left-[-24px] bottom-0 bg-white" />
          sub categories
          <em className="hidden absolute w-[24px] h-[24px] right-[-24px] bottom-0 bg-white" />
        </NoStyleLink>
      </div>
      <div className="p-4 rounded-[8px] bg-white">
        <Outlet />
      </div>
    </div>
  );
}
