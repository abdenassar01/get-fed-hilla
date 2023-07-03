'use client'

import { Control, useController } from 'react-hook-form'
import Image from 'next/image'
import React from 'react'
import clsx from 'clsx'

type Props = {
  name: string
  control: Control<any>
  children: React.ReactNode
  accept?: string
}

export function UploadFile({
  name,
  control,
  accept = 'image/*',
  children,
}: Props) {
  const {
    field: { onChange, onBlur, value },
    fieldState: { error },
  } = useController({
    name,
    control,
  })

  return (
    <label htmlFor="file">
      {children}
      <input
        accept={accept}
        onChange={onChange}
        onBlur={onBlur}
        type="file"
        name={name}
        id="file"
        className="hidden"
      />
      <p className="text-xxs text-error">{error?.message}</p>
    </label>
  )
}
