import { FC } from "react"
import Link from "next/link";

import { cls } from '@/shared/lib/classes.lib';
import cl from './_Logo.module.scss'

import { SITE_NAME } from "@/shared/data/seo.data";
import { MAIN_PAGES } from "@/config/pages-url.config";

interface LogoProps {
    isLink?: boolean
    className?: string,
}

export const Logo:FC<LogoProps> = ({isLink=false, className}) => {
    const html = (
        <div className={cls(cl.logo, className)}>
            <span className={cl.text}>{SITE_NAME}</span>
        </div>
    )
    
    if (!isLink)
        return html
    return (
        <Link href={MAIN_PAGES.Home}>{html}</Link>
    )
}
