"use client"

import { FC, useEffect, useState } from "react";
import Link from "next/link";

import { cls } from '@/shared/lib/classes.lib';
import cl from './_LogoBlock.module.scss';

import { SITE_NAME } from "@/shared/data/seo.data";
import { MAIN_PAGES } from "@/config/pages-url.config";
import { COLOR_LIST } from "@/shared/data/color.data";


interface LogoBlockProps{
    isLink?: boolean
    className?: string,
}

export const LogoBlock:FC<LogoBlockProps> = ({
    isLink = true,
    className,
}) => {
    // STATE
    const [colorIndex, setColorIndex] = useState(0)

    // HANDLE
    const handleOnMouseEnter = () => {
        setColorIndex(prev => (prev + 1) % COLOR_LIST.length)
    }

    // HTML
    const html = (
        <div onMouseEnter={handleOnMouseEnter} 
            style={{
                backgroundColor: COLOR_LIST[colorIndex],
            }}
            className={cls(cl.logo, className)}
        >
            <span className={cl.text}>{SITE_NAME}</span>
        </div>
    )
    
    if (!isLink)
        return html
    return (
        <Link href={MAIN_PAGES.Home}>{html}</Link>
    )
}
