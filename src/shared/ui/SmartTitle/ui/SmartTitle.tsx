"use client"

import { FC, useState } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_SmartTitle.module.scss';

import { ISmartTitle } from "../model/smartTitle.module";
import { Txt } from "../../Txt/ui/Txt";
import { TxtType } from "../../Txt/model/txt.model";
import { SuspenseLAny } from "../../SuspenseL/Any/SuspenseLAny";
import SuspenseL from "../../SuspenseL/SuspenseL";
import { BACKEND_PARAMS } from "@/config/params/backend.params.config";
import { getListWithout } from "@/shared/lib/list.lib";


interface SmartTitleProps extends ISmartTitle {}

export const SmartTitle:FC<SmartTitleProps> = ({
    defaultTitle,
    config,
    className,
    ...rest
}) => {
    // STATE
    const [search, setSearch] = useState<string | null>(null)

    // FUNC
    const getTitle = () => {
        return search ? `${defaultTitle}: ${search}` : defaultTitle
    }

    return (
        <SuspenseL>
            {/* <SuspenseLAny data={bodySuspense ?? []}> */}
            <SuspenseLAny data={
                getListWithout([
                    config?.search ? {searchKey: BACKEND_PARAMS.Search, set: setSearch} : undefined,
                ])
            }>
                <div className={cls(cl.wrapper, className)}>
                    <Txt text={getTitle()} 
                        type={TxtType.H1} 
                        className={cls(cl.title)}
                        {...rest} />
                    {/* <span>{getTitle()}</span> */}
                </div>
            </SuspenseLAny>
        </SuspenseL>
    )
}
