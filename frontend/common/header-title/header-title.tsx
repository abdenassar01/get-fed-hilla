import * as React from 'react';

import separator from "../../assets/images/icons/separator.svg";

type Props = {
    title: string,
    subTitle?: string,
    titleColor?: string,
    subTitleColor?: string
};

export function HeaderTitle({titleColor, title, subTitle, subTitleColor}: Props) {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-2xl text-secondary" style={{color: titleColor}}>{ title }</h1>
            <img src={separator} className="" alt={title} />
            <p className="text-base" style={{color: subTitleColor}}>{subTitle}</p>
        </div>
    );
};