import React from "react";
import zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import illustration from "Frontend/assets/images/illustrations/contact.svg";
import { useForm } from "react-hook-form";
import { TextInput } from "Frontend/common/form-fields/index.js";
import { Button } from "Frontend/common/index.js";
import { CheckboxField } from "Frontend/common/form-fields/checkbox-field.js";

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
    console.log("firstname " + firstname + " lastname: " + lastname);
  };

  return (
    <div className="flex items-center gap-[4.444vw] sm:w-full sm:flex-col">
      <img
        src={illustration}
        alt="khabiry contact page"
        className="w-[352.86] sm:w-[43.689vw]"
      />
      <div className="flex w-[41.181vw] flex-col gap-[1.667vw] sm:w-full">
        <div className="flex gap-[2.222vw] sm:flex-col">
          <TextInput
            control={control}
            labelClassName="text-cardText text-xs font-bold"
            label="Nom"
            name="firstname"
            placeholder="votre nom"
            className=""
          />
          <TextInput
            control={control}
            labelClassName="text-cardText text-xs font-bold"
            label="Prènom"
            name="lastname"
            placeholder="votre prènom"
            className=""
          />
        </div>
        <div className="flex gap-[2.222vw] sm:flex-col">
          <TextInput
            control={control}
            labelClassName="text-cardText text-xs font-bold"
            label="Adresse E-mail"
            name="email"
            placeholder="votre Adresse E-mail"
            className=""
          />
          <TextInput
            control={control}
            labelClassName="text-cardText text-xs font-bold"
            label="Tèlèphone"
            name="phone"
            placeholder="votre tèlèphone"
            className=""
          />
        </div>
        <div className="flex gap-[2.222vw] sm:flex-col">
          <TextInput
            control={control}
            labelClassName="text-cardText text-xs font-bold"
            label="Aide"
            name="comment"
            placeholder="Comment pouvons nous aider?"
            className="w-[100%]"
          />
        </div>
        <div className="flex items-center justify-between gap-[2.222vw] sm:flex-col sm:items-start">
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
        </div>
      </div>
    </div>
  );
}
