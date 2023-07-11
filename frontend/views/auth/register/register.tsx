"use client";

import React, { useEffect } from "react";
import zod from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import illustration from "Frontend/assets/images/illustrations/register.svg";
import { Button, HeaderTitle } from "Frontend/common/index.js";
import { CheckboxField, TextInput } from "Frontend/common/form-fields/index.js";
import { Link, useNavigate } from "react-router-dom";
import { useUserStore } from "Frontend/stores/user-store.js";

const schema = zod.object({
  name: zod.string({
    required_error: "Le Prènom obligatoire",
  }),
  lastname: zod.string({
    required_error: "Le Nom obligatoire",
  }),
  mail: zod
    .string({
      required_error: "L'adresse E-mail obligatoire",
    })
    .email("email invalid: example@mail.com"),
  phone: zod.string({
    required_error: "Le Numero de Tèlèphone obligatoire",
  }),
  password: zod.string({
    required_error: "Le Mot de pass est obligatoire",
  }),
  repassword: zod
    .string({
      required_error: "Le Mot de pass de confirmation est obligatoire",
    })
    .refine((data: any) => data.password === data.repassword, {
      message: "les mots de passe ne correspondent pas",
      path: ["repassword"],
    }),
  terms: zod.boolean({
    required_error: "Les condition de service est obligatoire",
  }),
});

type FormValues = zod.infer<typeof schema>;

export default function Register() {
  const { setUser, user } = useUserStore();
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm<FormValues>({
    mode: "onChange",
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    if (sessionStorage.getItem("user") !== null) {
      navigate("/");
    }
  }, [user]);

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="w-full bg-background">
      <div className="container flex items-center py-[48px] sm:flex-col">
        <div className="hidden w-full justify-center sm:flex ">
          <HeaderTitle title="Sign Up" subTitle="" />
        </div>
        <div className="flex w-[41.042vw] items-center justify-center px-[4.444vw] py-[2.222vw] sm:w-full">
          <img
            src={illustration}
            alt="khabiry login page"
            className="w-[26.319vw] sm:w-[48.058vw]"
          />
        </div>
        <div className="flex w-[41.042vw] flex-col gap-[24px] sm:w-full">
          <div className="mb-[3.472vw] sm:hidden">
            <HeaderTitle title="Sign up" subTitle="" />
          </div>
          <div className="flex flex-col gap-[24px]">
            <TextInput
              control={control}
              label="e-mail / username"
              name="username"
              placeholder="Your username/e-mail*"
            />
            <TextInput
              control={control}
              label="fistname"
              name="firstname"
              placeholder="Your firstname*"
            />
            <TextInput
              control={control}
              label="lastname"
              name="lastname"
              placeholder="Your lastname*"
            />
            <TextInput
              control={control}
              label="password"
              name="password"
              type="password"
              placeholder="Your password*"
            />
            <TextInput
              control={control}
              label="confirm password"
              name="repassword"
              type="password"
              placeholder="Repeat password*"
            />
            <CheckboxField
              control={control}
              label="By registring I accept get-fed terms of use."
              name="terms"
            />
            <div className="w-full flex justify-end">
              <Button
                className="w-fit"
                text="sign up"
                onClick={handleSubmit(onSubmit)}
              />
            </div>

            <div className="w-[100%] text-center text-xs font-medium text-[#B7B7B7] sm:text-mb-xxs">
              You already have an account?
              <Link to="/login" className="text-secondary">
                &nbsp; Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
