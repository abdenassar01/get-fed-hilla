import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUploadImage } from "Frontend/utils/hooks/use-upload-image.js";

export default function SubCategoriesManagement() {
  const [file, setFile] = useState();

  const onFileChange = (event: any) => {
    // @ts-ignore
    setFile(event.target.files[0]);
  };
  const onFileUpload = () => {
    useUploadImage(file).then((res) => console.log(res));
  };

  return (
    <div>
      <div className="">
        <input name="file" type="file" onChange={onFileChange} />
        <button onClick={onFileUpload}>Upload</button>
      </div>
    </div>
  );
}
