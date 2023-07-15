"use client";

import React, { useEffect, useState } from "react";
import zod from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import illustration from "Frontend/assets/images/illustrations/register.svg";
import { Alert, Button, HeaderTitle, Loading } from "Frontend/common/index.js";
import {
  CheckboxField,
  FieldPhoneWithCountry,
  TextInput,
} from "Frontend/common/form-fields/index.js";
import { Link, useNavigate } from "react-router-dom";
import { useUserStore } from "Frontend/stores/user-store.js";
import { UserEndpoint } from "Frontend/generated/endpoints.js";
import { login } from "@hilla/frontend";

const schema = zod.object({
  firstname: zod.string({
    required_error: "firstname required",
  }),
  lastname: zod.string({
    required_error: "lastname required",
  }),
  username: zod.string({
    required_error: "e-mail required",
  }),
  phone: zod.object({
    countryCode: zod.string(),
    phone: zod.optional(zod.string()),
  }),
  address: zod.optional(zod.string()),
  password: zod.string({
    required_error: "password required",
  }),
  repassword: zod.string({
    required_error: "confirm password required",
  }),
  terms: zod.boolean({
    required_error: "you should accept terms of use before register ",
  }),
});

type FormValues = zod.infer<typeof schema>;

export default function Register() {
  const [loading, setLoading] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
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

  const onSubmit = ({
    username,
    password,
    repassword,
    lastname,
    phone,
    address,
    firstname,
  }: FormValues) => {
    setLoading(true);
    if (password === repassword) {
      UserEndpoint.addEmployee({
        username: username,
        password: password,
        firstName: firstname,
        address: address,
        phone: `${phone.countryCode} ${phone.phone}`,
        lastName: lastname,
        role: "USER",
      })

        .then((res) => {
          // @ts-ignore
          return login(res?.username, res?.password).then(() => res);
        })
        .then((data) => {
          // @ts-ignore
          setUser(data);
          // @ts-ignore
          sessionStorage.setItem("role", data.role);
          // @ts-ignore
          sessionStorage.setItem("user", JSON.stringify(data));
        });
    } else {
      setOpen(true);
    }
    setLoading(false);
  };

  if (loading) return <Loading />;

  return (
    <div className="w-full bg-background">
      <Alert message="Passwords not matched" open={open} status="error" />
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
          <div className="flex flex-col gap-2">
            <div className="grid grid-cols-2 gap-x-2">
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
              <FieldPhoneWithCountry
                control={control}
                label="phone"
                name="phone"
              />
              <TextInput
                control={control}
                label="address"
                name="address"
                placeholder="Your address*"
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
            </div>
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
