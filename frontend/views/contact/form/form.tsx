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
    control,
    handleSubmit,
    reset: resetForm,
  } = useForm<FormValues>({
    mode: "onChange",
    // resolver: zodResolver(schema),
  });

  const onSubmit = ({
    firstname,
    lastname,
    email,
    phone,
    comment,
  }: FormValues) => {
    setAlert(true);
    console.log("firstname " + firstname + " lastname: " + lastname);
  };

  const [alert, setAlert] = useState<boolean>(false);

  return (
    <div className="flex items-center gap-[4.444vw] sm:w-full sm:flex-col">
      <Alert
        message="You have successfully contacted the support"
        status="success"
        open={alert}
      />
      <img
        src={illustration}
        alt="get fed contact page"
        className="w-[352.86] sm:w-[43.689vw]"
      />
      <div className="flex w-[41.181vw] flex-col gap-[1.667vw] sm:w-full">
        {/*<div className="flex gap-[2.222vw] sm:flex-col">*/}
        <TextInput
          control={control}
          labelClassName="text-cardText text-xs font-bold"
          label="Name"
          name="firstname"
          placeholder="Your name?"
          className=""
        />
        <TextInput
          control={control}
          labelClassName="text-cardText text-xs font-bold"
          label="Lastname"
          name="lastname"
          placeholder="your lastname?"
          className=""
        />
        {/*</div>*/}
        {/*<div className="flex gap-[2.222vw] sm:flex-col">*/}
        <TextInput
          control={control}
          labelClassName="text-cardText text-xs font-bold"
          label="E-mail"
          name="email"
          placeholder="Your E-mail address"
          className=""
        />
        <TextInput
          control={control}
          labelClassName="text-cardText text-xs font-bold w-full"
          label="Phone"
          name="phone"
          placeholder="votre phone number"
          className=""
        />
        {/*</div>*/}
        {/*<div className="flex gap-[2.222vw] sm:flex-col">*/}
        <TextAreaField
          control={control}
          labelClassName="text-cardText text-xs font-bold"
          label="Help"
          name="comment"
          placeholder="How can we help you?"
          className="w-[100%]"
        />
        {/*</div>*/}
        {/*<div className="flex items-center justify-between gap-[2.222vw] sm:flex-col sm:items-start">*/}
        <CheckboxField
          name="terms"
          control={control}
          label="J’accepte les conditions"
          checked
        />
        <Button
          text="Envoyer"
          className="w-fit sm:w-full"
          onClick={handleSubmit(onSubmit)}
        />
        {/*</div>*/}
      </div>
    </div>
  );
}
