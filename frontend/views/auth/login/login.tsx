import React from "react";
import { useForm } from "react-hook-form";
import zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import illustration from "Frontend/assets/images/illustrations/login.svg";
import { Button, HeaderTitle } from "Frontend/common/index.js";
import { CheckboxField, TextInput } from "Frontend/common/form-fields/index.js";
import { Link } from "react-router-dom";

const schema = zod.object({
  username: zod.string({
    required_error: "Nom d’utulisateur / email obligatoire",
  }),
  lastname: zod.string({
    required_error: "Le mot de passe obligatoire",
  }),
  terms: zod.boolean(),
});

type FormValues = zod.infer<typeof schema>;

export default function Login() {
  const { control, handleSubmit } = useForm<FormValues>({
    mode: "onChange",
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="w-[100%] bg-[url('/forms-background.svg')] bg-contain bg-no-repeat sm:bg-[url('/auth-background.svg')]">
      <div className="container flex flex-col items-center py-[6.667vw]">
        <div className="flex w-full items-end gap-[24px] sm:flex-col">
          <div className="hidden w-full justify-center sm:flex ">
            <HeaderTitle title="Connectez vous" subTitle="" />
          </div>
          <div className="flex w-[41.042vw] items-center justify-center px-[4.444vw] py-[24px] sm:w-full">
            <img
              src={illustration}
              alt="khabiry login page"
              className="w-[26.319vw] sm:w-[41.988vw]"
            />
          </div>
          <div className="flex w-[41.042vw] flex-col gap-[1.667vw] sm:w-full">
            <div className="mb-[3.472vw] sm:hidden">
              <HeaderTitle title="Connectez vous" subTitle="" />
            </div>
            <div className="flex flex-col gap-[24px]">
              <TextInput
                control={control}
                label="Nom d’utulisateur / email"
                name="username"
                placeholder="Nom d’utulisateur / email"
                className=""
              />
              <TextInput
                type="password"
                control={control}
                label="Entrer votre mot de passe"
                name="mail"
                placeholder="Mot de passe"
                className=""
              />
              <div className="flex justify-between">
                <CheckboxField
                  control={control}
                  className="text-xs"
                  name="remember_me"
                  label="rester connecté"
                />
                <Link
                  to="/reset"
                  className="text-xs text-[#B7B7B7] sm:text-mb-xxs"
                >
                  I forgot password
                </Link>
              </div>
              <div className="w-full flex items-center justify-between">
                <Button
                  className="w-fit"
                  text="Envoyer"
                  onClick={handleSubmit(onSubmit)}
                />
                <Link
                  to="/register"
                  className="flex justify-center text-xs text-[#B7B7B7] hover:text-main sm:text-mb-xxs"
                >
                  register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
