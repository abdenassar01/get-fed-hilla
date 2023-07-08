import { uploadFile } from "@uploadcare/upload-client";

export async function useUploadImage(image: any) {
  try {
    const res = await uploadFile(image, {
      publicKey: process.env.UPLOAD_CARE_PUBLIC_KEY || "",
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
