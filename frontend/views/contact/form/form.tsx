import React, { useState } from "react";
import zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import illustration from "Frontend/assets/images/illustrations/contact.svg";
import { useForm } from "react-hook-form";
import { TextInput } from "Frontend/common/form-fields/index.js";
import { Alert, Button } from "Frontend/common/index.js";
import { CheckboxField } from "Frontend/common/form-fields/checkbox-field.js";
import { TextAreaField } from "Frontend/common/form-fields/text-area-field.js";
import { FieldPhoneWithCountry } from "Frontend/common/form-fields/field-phone-with-country/index.js";

const schema = zod.object({
  firstname: zod.string({
    required_error: "Firstname required",
  }),
  lastname: zod.string({
    required_error: "Lastname required",
  }),
  email: zod
    .string({
      required_error: "email required",
    })
    .email("email format not valid: example@mail.com"),
  phone: zod.string({
    required_error: "phone number required",
  }),
  help: zod.string({
    required_error: "Message required",
  }),
  terms: zod.boolean({
    required_error: "you must accept terms of use to contact support",
  }),
});

type FormValues = zod.infer<typeof schema>;

export function Form() {
  const {
    formState: { errors },
    control,
    handleSubmit,
    reset: resetForm,
  } = useForm<FormValues>({
    mode: "onChange",
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
    setAlert((prev) => !prev);
    console.log("data", data);
    console.log("alert", alert);
  };

  const [alert, setAlert] = useState<boolean>(false);

  return (
    <div className="flex items-center gap-[4.444vw] sm:w-full sm:flex-col">
      <Alert
        message="We will process your request and email you when possible"
        status="success"
        open={alert}
      />
      <img
        src={illustration}
        alt="get fed contact page"
        className="w-[352.86] sm:w-[43.689vw]"
      />
      <div className="flex flex-col gap-[1.667vw] sm:w-full">
        <div className="flex gap-[2.222vw] sm:flex-col">
          <TextInput
            control={control}
            label="Name"
            name="firstname"
            placeholder="Your name?"
            className=""
          />
          <TextInput
            control={control}
            label="Lastname"
            name="lastname"
            placeholder="your lastname?"
            className=""
          />
        </div>
        <div className="flex gap-[2.222vw] sm:flex-col">
          <TextInput
            control={control}
            label="E-mail"
            name="email"
            placeholder="Your E-mail address"
            className=""
          />
          <FieldPhoneWithCountry
            control={control}
            label="Phone"
            name="phone"
            className=""
          />
        </div>
        <div className="flex gap-[2.222vw] sm:flex-col">
          <TextAreaField
            control={control}
            label="Help"
            name="help"
            placeholder="How can we help you?"
            className="w-[100%]"
            maxLength={1000}
          />
        </div>
        <div className="flex items-center justify-between gap-[2.222vw] sm:flex-col sm:items-start">
          <CheckboxField
            name="terms"
            control={control}
            label="I accept the terms of use"
            checked
          />
          <Button
            text="Send"
            className="w-fit sm:w-full"
            onClick={handleSubmit(onSubmit)}
          />
        </div>
      </div>
    </div>
  );
}
