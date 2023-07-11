import { uploadFile } from "@uploadcare/upload-client";

export async function useUploadImage(image: any) {
  try {
    const res = await uploadFile(image, {
      publicKey: "4a3ffc8c82b28b73b6ad",
      store: "auto",
      metadata: {
        subsystem: "uploader",
        pet: "cat",
      },
    });
    return res.cdnUrl || "";
  } catch (err) {
    return "Error accured" + err;
  }
}
