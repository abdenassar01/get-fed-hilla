import * as React from 'react'

type Props = {
  img: any
  width: string
  muskId: string
}

export function ImageShapeMaker({ img, width, muskId }: Props) {
  return (
    <svg
      width={width}
      height={width}
      baseProfile="full"
      className="boxshadow"
      version="1.2">
      <defs>
        <mask
          id={muskId}
          maskUnits="userSpaceOnUse"
          maskContentUnits="userSpaceOnUse"
          transform="scale(1)">
          <image
            width={width}
            height={width}
            xlinkHref="https://i.imgur.com/5RWopUa.png"
          />
        </mask>
      </defs>
      <image
        id="the-mask"
        mask={`url(#${muskId})`}
        width={width}
        height={width}
        y="0"
        x="0"
        xlinkHref={img}
      />
    </svg>
  )
}
