import * as React from "react";
import { useState } from "react";
import { useUploadImage } from "Frontend/utils/hooks/use-upload-image.js";

export default function Management() {
  const [file, setFile] = useState();
  const onFileChange = (event: any) => {
    // @ts-ignore
    setFile(event.target.files[0]);
  };
  const onFileUpload = () => {
    useUploadImage(file).then((res) => console.log(res));
  };
  return (
    <div className="w-full bg-white p-4 rounded-[8px] min-h-[120%]">
      <input name="file" type="file" onChange={onFileChange} />
      <button onClick={onFileUpload}>Upload</button>
    </div>
  );
}
