import React, { useState } from "react";
import zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import illustration from "Frontend/assets/images/illustrations/contact.svg";
import { useForm } from "react-hook-form";
import { TextInput } from "Frontend/common/form-fields/index.js";
import { Alert, Button } from "Frontend/common/index.js";
import { CheckboxField } from "Frontend/common/form-fields/checkbox-field.js";
import { TextAreaField } from "Frontend/common/form-fields/text-area-field.js";

const schema = zod.object({
  firstname: zod.string({
    required_error: "Le Nom obligatoire",
  }),
  lastname: zod.string({
    required_error: "Le Prènom obligatoire",
  }),
  email: zod
    .string({
      required_error: "email obligatoire",
    })
    .email("email invalid: example@mail.com"),
  phone: zod.string({
    required_error: "Le Numero de Tèlèphone obligatoire",
  }),
  comment: zod.string({
    required_error: "Le message aide est obligatoire",
  }),
  terms: zod.boolean({
    required_error: "Les condition de service est obligatoire",
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
  console.log(errors);
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
          <TextInput
            control={control}
            label="Phone"
            name="phone"
            placeholder="votre phone number"
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
            text="Envoyer"
            className="w-fit sm:w-full"
            onClick={handleSubmit(onSubmit)}
          />
        </div>
      </div>
    </div>
  );
}
