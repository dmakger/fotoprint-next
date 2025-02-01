import { FC } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_PopularByDaysPageContent.module.scss'
import { WrapperToolbar } from "@/shared/ui/Wrapper/Toolbar/WrapperToolbar";

interface PopularByDaysPageContentProps{
    days: number
    className?: string,
}

export const PopularByDaysPageContent:FC<PopularByDaysPageContentProps> = ({
    days,
    className,
}) => {
    console.log('qwe days', days)
    return (
        <WrapperToolbar title="" className={className}>

        </WrapperToolbar>
    )
}
