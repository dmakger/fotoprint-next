"use client"

import { FC } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_SmartTitle.module.scss'
import { ISmartTitle } from "../model/smartTitle.module";
import { Txt } from "../../Txt/ui/Txt";
import { TxtType } from "../../Txt/model/txt.model";

interface SmartTitleProps extends ISmartTitle {}

export const SmartTitle:FC<SmartTitleProps> = ({
    defaultTitle,
    className,
    ...rest
}) => {
    // STATE
    // const []

    return (
        <div className={cls(cl.wrapper, className)}>
            <Txt text={defaultTitle} 
                 type={TxtType.H1} 
                 className={cls(cl.title)}
                 {...rest} />
        </div>
    )
}
