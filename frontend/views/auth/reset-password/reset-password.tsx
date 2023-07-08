import React from "react";

import illustration from "Frontend/assets/images/illustrations/reset-password.svg";
import { useForm } from "react-hook-form";
import { Button, HeaderTitle } from "Frontend/common/index.js";
import { TextInput } from "Frontend/common/form-fields/index.js";

export default function ResetPassword() {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="w-full bg-background">
      <div className="container flex items-center py-2 sm:flex-col">
        <div className="hidden sm:block">
          <HeaderTitle title="MOT DE PASSE oUBLIé?" subTitle="" />
        </div>
        <div className="flex w-[41.042vw] items-center justify-center px-[4.444vw] py-[2.222vw] sm:w-full">
          <img
            src={illustration}
            alt="khabiry login page"
            className="w-[26.319vw] sm:my-[11.650vw] sm:w-[44.660vw]"
          />
        </div>
        <div className="flex w-[41.042vw] flex-col gap-[1.667vw] sm:w-full">
          <div className="mb-[3.472vw] sm:hidden">
            <HeaderTitle title="MOT DE PASSE oUBLIé?" subTitle="" />
          </div>
          <div className="flex flex-col gap-[1.667vw]">
            <TextInput
              control={control}
              label="Adresse e-mail"
              name="mail"
              placeholder="Votre Adresse E-mail*"
              className=""
            />
            <div className="text-center text-[#B7B7B7]">
              les instructions de réinitialisation du mot de passe seront
              envoyées à votre adresse e-mail enregistrée
            </div>
            <Button onClick={handleSubmit(onSubmit)} text="Envoyer" />
          </div>
        </div>
      </div>
    </div>
  );
}
