'use client'

import { useOutsideClick } from '@/utils'
import clsx from 'clsx'
import React, { useRef, useState } from 'react'
import { Control, Controller } from 'react-hook-form'
import { IoIosArrowDown } from 'react-icons/io'

type Props = {
  control: Control<any>
  label: string
  name: string
  placeholder?: string
  items: {
    value: string
    label: string
  }[]
  className?: string
  labelClassName?: string
  wrapperClassName?: string
}

export function DropdownField({
  control,
  name,
  className,
  items,
  placeholder,
  label,
  labelClassName,
  wrapperClassName,
}: Props) {
  const dropdownRef = useRef(null)
  const [openDropdown, setOpenDropdown] = useState<boolean>(false)

  useOutsideClick(dropdownRef, () => setOpenDropdown(false))

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <div
          ref={dropdownRef}
          className={clsx(
            'relative flex w-[100%] flex-col gap-2',
            wrapperClassName,
          )}>
          <label
            htmlFor={name}
            className={clsx(
              'text-xs font-bold text-cardText sm:text-mb-xxs',
              labelClassName,
            )}>
            {label}
          </label>
          <div
            onClick={() => setOpenDropdown(prev => !prev)}
            className={clsx(
              'flex w-[100%] items-center justify-between rounded-[10px] border-none bg-[#F3F4F6] px-[24px] py-[14px] text-xs text-[#A6A6A6] sm:text-mb-xxs',
              className,
              value && 'text-black',
              error && 'border-[1px] border-error',
            )}>
            <div>{value?.label ?? placeholder ?? label}</div>
            <IoIosArrowDown />
          </div>
          <p className="mb-[-1.667vw] h-[1.667vw] text-xxs text-error">
            {error?.message}
          </p>
          <div
            className={clsx(
              'absolute top-[5.556vw] isolate z-[1000] h-[200px] w-full min-w-[22vw] cursor-pointer overflow-x-hidden rounded-[4px] bg-white shadow-md sm:top-[22.816vw] sm:w-[70vw]',
              !openDropdown && 'hidden',
            )}>
            <div>
              {items.map(item => (
                <div
                  key={item.value}
                  onClick={() => {
                    onChange(item)
                    setOpenDropdown(false)
                  }}
                  className="flex w-full px-[24px] py-[14px] hover:bg-[#dadadb]">
                  <div>{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    />
  )
}
