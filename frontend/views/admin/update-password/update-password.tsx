import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import zod from "zod";
import { TextInput } from "Frontend/common/form-fields/index.js";

const schema = zod.object({
  current_password: zod
    .string({
      required_error: "current password required.",
    })
    .min(8, "new password should be at least 8 characters long."),
  new_password: zod
    .string({
      required_error: "new password required",
    })
    .min(8, "password should be at least 8 characters long"),
  new_password_confirm: zod
    .string({
      required_error: "confirm password required",
    })
    .min(8, "confirm password should be at least 8 characters long")
    .refine((data: any) => data.new_password === data.new_password_confirm, {
      message: "passwords not match",
      path: ["new_password_confirm"],
    }),
});

type FormValues = zod.infer<typeof schema>;

export default function UpdatePassword() {
  const { control, handleSubmit } = useForm<FormValues>({
    mode: "onChange",
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormValues) => console.log(data);

  return (
    <div className="flex w-full flex-col gap-[24px] rounded-[0.694vw] bg-white p-[2.222vw] sm:p-0 sm:pt-[24px]">
      <div>
        <div className="text-xbase font-bold text-secondary sm:text-[5.340vw]">
          Security
        </div>
        <div className="text-xxs text-mainText sm:text-mb-xxs">
          update admin password to make sure your admin account stays secure
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <TextInput
          placeholder="********"
          control={control}
          label="current password"
          type="password"
          name="current_password"
          inputClassName="bg-[#F3F3F3]"
        />
        <TextInput
          placeholder="********"
          control={control}
          label="new password"
          type="password"
          name="new_password"
          inputClassName="bg-[#F3F3F3]"
        />
        <TextInput
          placeholder="********"
          control={control}
          label="repeat new password"
          type="password"
          name="new_password_confirm"
          inputClassName="bg-[#F3F3F3]"
        />
        <button
          className="bg-main px-[32px] transition-all ease-in delay-75 py-[7px] border-[1px] rounded-full border-main text-white hover:text-main hover:bg-[transparent]"
          onClick={handleSubmit(onSubmit)}
        >
          update password
        </button>
      </div>
      <div className="flex justify-between gap-[24px] sm:flex-col sm:items-start">
        <div>
          <div className="text-base font-bold text-cardText sm:text-mb-base">
            delete admin account
          </div>
          <div className="text-xxs text-[#A6A6A6] sm:text-mb-xxs">
            once you deleted this account there is no coming back. you well lost
            your account for ever!
          </div>
        </div>
        <button className="text-mb-xss text-[#E00303]">
          delete admin account
        </button>
      </div>
    </div>
  );
}
