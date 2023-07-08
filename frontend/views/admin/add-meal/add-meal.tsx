import * as React from "react";
import { useState } from "react";
import { uploadFile } from "@uploadcare/upload-client";

export default function AddMeal() {
  const [file, setFile] = useState();
  const onFileChange = (event: any) => {
    // @ts-ignore
    setFile(event.target.files[0]);
  };
  const onFileUpload = async () => {
    // @ts-ignore
    const result = await uploadFile(file, {
      publicKey: "4a3ffc8c82b28b73b6ad",
      store: "auto",
      metadata: {
        subsystem: "uploader",
        pet: "cat",
      },
    });
    console.log("data", result);
  };
  return (
    <>
      <input name="file" type="file" onChange={onFileChange} />
      <button onClick={onFileUpload}>Upload</button>
    </>
  );
}
