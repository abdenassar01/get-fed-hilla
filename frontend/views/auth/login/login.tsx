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
    required_error: "username / email required",
  }),
  lastname: zod.string({
    required_error: "password required",
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
    <div className="w-[100%] bg-background bg-[url('/forms-background.svg')] bg-contain bg-no-repeat sm:bg-[url('/auth-background.svg')]">
      <div className="container flex flex-col items-center py-[6.667vw]">
        <div className="flex w-full items-end gap-[24px] sm:flex-col">
          <div className="hidden w-full justify-center sm:flex ">
            <HeaderTitle title="Log in" subTitle="" />
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
              <HeaderTitle title="Log in" subTitle="" />
            </div>
            <div className="flex flex-col gap-[24px]">
              <TextInput
                control={control}
                label="username / email"
                name="username"
                placeholder="Your username?"
                className=""
              />
              <TextInput
                type="password"
                control={control}
                label="Your password?"
                name="mail"
                placeholder="password"
                className=""
              />
              <div className="flex justify-between">
                <CheckboxField
                  control={control}
                  className="text-xs"
                  name="remember_me"
                  label="Remember me"
                />
                <Link
                  to="/reset"
                  className="text-xs text-[#B7B7B7] sm:text-mb-xxs"
                >
                  forgot password?
                </Link>
              </div>
              <Button
                className="w-full"
                text="Envoyer"
                onClick={handleSubmit(onSubmit)}
              />
              <div className="flex items-center gap-2 text-cardText">
                Already have an account ?
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
