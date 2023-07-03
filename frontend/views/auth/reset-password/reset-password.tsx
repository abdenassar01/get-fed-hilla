'use client'

import Image from 'next/image'
import React from 'react'

import illustration from '@/assets/images/illustrations/reset-password.svg'
import { Button, FieldText, SectionHeader } from '@/components'
import { useForm } from 'react-hook-form'

export function ResetPassword() {
  const { control, handleSubmit } = useForm()

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <div className="w-[100%] bg-[url('/forms-background.svg')] bg-contain bg-no-repeat sm:bg-[url('/auth-background.svg')]">
      <div className="container flex items-center py-[6.667vw] sm:flex-col">
        <div className="hidden sm:block">
          <SectionHeader title="MOT DE PASSE oUBLIé?" subTitle="" />
        </div>
        <div className="flex w-[41.042vw] items-center justify-center px-[4.444vw] py-[2.222vw] sm:w-full">
          <Image
            src={illustration}
            alt="khabiry login page"
            className="w-[26.319vw] sm:my-[11.650vw] sm:w-[44.660vw]"
          />
        </div>
        <div className="flex w-[41.042vw] flex-col gap-[1.667vw] sm:w-full">
          <div className="mb-[3.472vw] sm:hidden">
            <SectionHeader title="MOT DE PASSE oUBLIé?" subTitle="" />
          </div>
          <div className="flex flex-col gap-[1.667vw]">
            <FieldText
              control={control}
              labelClassName="text-cardText text-xs font-bold"
              label="Adresse e-mail"
              name="mail"
              placeholder="Votre Adresse E-mail*"
              className=""
            />
            <div className="text-center text-[#B7B7B7]">
              les instructions de réinitialisation du mot de passe seront
              envoyées à votre adresse e-mail enregistrée
            </div>
            <Button onClick={handleSubmit(onSubmit)} text="Envoyer" />
          </div>
        </div>
      </div>
    </div>
  )
}
