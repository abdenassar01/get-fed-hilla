'use client'

import Image from 'next/image'
import React from 'react'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Checkbox, FieldText, PasswordField, SectionHeader } from '@/components'

import illustration from '@/assets/images/illustrations/login.svg'
import google from '@/assets/icons/google.svg'

const schema = zod.object({
  username: zod.string({
    required_error: 'Nom d’utulisateur / email obligatoire',
  }),
  lastname: zod.string({
    required_error: 'Le mot de passe obligatoire',
  }),
  terms: zod.boolean(),
})

type FormValues = zod.infer<typeof schema>

export function Login() {
  const { control, handleSubmit } = useForm<FormValues>({
    mode: 'onChange',
    resolver: zodResolver(schema),
  })

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <div className="w-[100%] bg-[url('/forms-background.svg')] bg-contain bg-no-repeat sm:bg-[url('/auth-background.svg')]">
      <div className="container flex flex-col items-center py-[6.667vw]">
        <div className="flex w-full items-end gap-[24px] sm:flex-col">
          <div className="hidden w-full justify-center sm:flex ">
            <SectionHeader title="Connectez vous" subTitle="" />
          </div>
          <div className="flex w-[41.042vw] items-center justify-center px-[4.444vw] py-[24px] sm:w-full">
            <Image
              src={illustration}
              alt="khabiry login page"
              className="w-[26.319vw] sm:w-[41.988vw]"
            />
          </div>
          <div className="flex w-[41.042vw] flex-col gap-[1.667vw] sm:w-full">
            <div className="mb-[3.472vw] sm:hidden">
              <SectionHeader title="Connectez vous" subTitle="" />
            </div>
            <div className="flex flex-col gap-[24px]">
              <FieldText
                control={control}
                labelClassName="text-cardText text-xs font-bold"
                label="Nom d’utulisateur / email"
                name="username"
                placeholder="Nom d’utulisateur / email"
                className=""
              />
              <FieldText
                type="password"
                control={control}
                labelClassName="text-cardText text-xs font-bold"
                label="Entrer votre mot de passe"
                name="mail"
                placeholder="Mot de passe"
                className=""
              />
              <div className="flex justify-between">
                <Checkbox
                  control={control}
                  className="text-xs"
                  name="remember_me"
                  label="rester connecté"
                />
                <Link
                  href="/reset-password"
                  className="text-xs text-[#B7B7B7] sm:text-mb-xxs">
                  J’ai oublié mon mot de passe
                </Link>
              </div>
              <button
                onClick={handleSubmit(onSubmit)}
                className="rounded-[0.278vw] border-[1px] border-secondary bg-secondary px-[2.222vw] py-[0.972vw] text-white transition ease-in-out hover:bg-[transparent] hover:text-secondary">
                Conexion
              </button>
              <button
                onClick={() => console.log('connecter avec google')}
                className="flex w-[100%] items-center justify-center gap-[0.556vw] rounded-[0.278vw] border-[1px] border-secondary px-[2.222vw] py-[0.972vw] text-secondary transition ease-in-out hover:bg-secondary hover:text-white">
                <Image
                  src={google}
                  alt="google icon"
                  className="w-[2.014vw] sm:w-[7.039vw]"
                />
                <div className="sm:text-mb-xbase">Se connecter avec Google</div>
              </button>
              <Link
                href="/register"
                className="flex justify-center text-xs text-[#B7B7B7] hover:text-secondary sm:text-mb-xxs">
                Créer un compte
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
