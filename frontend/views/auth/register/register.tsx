'use client'

import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import zod from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Checkbox, SectionHeader, FieldText, Button } from '@/components'

import illustration from '@/assets/images/illustrations/register.svg'

const schema = zod.object({
  name: zod.string({
    required_error: 'Le Prènom obligatoire',
  }),
  lastname: zod.string({
    required_error: 'Le Nom obligatoire',
  }),
  mail: zod
    .string({
      required_error: "L'adresse E-mail obligatoire",
    })
    .email('email invalid: example@mail.com'),
  phone: zod.string({
    required_error: 'Le Numero de Tèlèphone obligatoire',
  }),
  password: zod.string({
    required_error: 'Le Mot de pass est obligatoire',
  }),
  repassword: zod
    .string({
      required_error: 'Le Mot de pass de confirmation est obligatoire',
    })
    .refine((data: any) => data.password === data.repassword, {
      message: 'les mots de passe ne correspondent pas',
      path: ['repassword'],
    }),
  terms: zod.boolean({
    required_error: 'Les condition de service est obligatoire',
  }),
})

type FormValues = zod.infer<typeof schema>

export function Register() {
  const { control, handleSubmit } = useForm<FormValues>({
    mode: 'onChange',
    resolver: zodResolver(schema),
  })

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <div className="w-[100%] bg-[url('/forms-background.svg')] bg-contain bg-no-repeat sm:bg-[url('/auth-background.svg')]">
      <div className="container flex items-center py-[48px] sm:flex-col">
        <div className="hidden w-full justify-center sm:flex ">
          <SectionHeader title="Connectez vous" subTitle="" />
        </div>
        <div className="flex w-[41.042vw] items-center justify-center px-[4.444vw] py-[2.222vw] sm:w-full">
          <Image
            src={illustration}
            alt="khabiry login page"
            className="w-[26.319vw] sm:w-[48.058vw]"
          />
        </div>
        <div className="flex w-[41.042vw] flex-col gap-[24px] sm:w-full">
          <div className="mb-[3.472vw] sm:hidden">
            <SectionHeader title="S'inscrire" subTitle="" />
          </div>
          <div className="flex flex-col gap-[24px]">
            <FieldText
              iconUrl="https://i.imgur.com/Kiw7rIN.png"
              control={control}
              labelClassName="text-cardText text-xs font-bold"
              label="Adresse e-mail"
              name="mail"
              placeholder="Votre Adresse E-mail*"
            />
            <FieldText
              iconUrl="https://i.imgur.com/d6swyaN.png"
              control={control}
              labelClassName="text-cardText text-xs font-bold"
              label="Prènom"
              name="name"
              placeholder="Prènom*"
            />
            <FieldText
              iconUrl="https://i.imgur.com/d6swyaN.png"
              control={control}
              labelClassName="text-cardText text-xs font-bold"
              label="Nom"
              name="lastname"
              placeholder="nom*"
            />
            <FieldText
              iconUrl="https://i.imgur.com/BKxfKBz.png"
              control={control}
              labelClassName="text-cardText text-xs font-bold"
              label="Mot de passe"
              name="password"
              type="password"
              placeholder="mot de passe*"
            />
            <FieldText
              iconUrl="https://i.imgur.com/BKxfKBz.png"
              control={control}
              labelClassName="text-cardText text-xs font-bold"
              label="Confirmer le mot de passe"
              name="repassword"
              type="password"
              placeholder="Confirmer le mot de passe *"
            />
            <Checkbox
              control={control}
              label="j'accepte que les informations saisies sont exploitées par Khabiry dans le cadre de l'inscription au site"
              name="terms"
            />
            <Button text="Envoyer" onClick={handleSubmit(onSubmit)} />
            <div className="w-[100%] text-center text-xs font-medium text-[#B7B7B7] sm:text-mb-xxs">
              Vous avez déjà un compte?
              <Link href="/login" className="text-secondary">
                &nbsp; Connectez-vous
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
