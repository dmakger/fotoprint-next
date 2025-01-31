"use client";

import { FC } from "react";
import Link from "next/link";

import { cls } from "@/shared/lib/classes.lib";
import cl from "./_LogoText.module.scss";

import { SITE_NAME } from "@/shared/data/seo.data";
import { MAIN_PAGES } from "@/config/pages-url.config";

interface LogoTextProps {
    isLink?: boolean;
    className?: string;
}

export const LogoText: FC<LogoTextProps> = ({ isLink = true, className }) => {
    const html = (
        <div className={cls(cl.logo, className)}>
            <div className={cl["text-wrapper"]}>
                <span className={cl.text}>{SITE_NAME}</span>
                <span className={cl["text-hover"]}>Главная</span>
            </div>
        </div>
    );

    if (!isLink) return html;
    return <Link href={MAIN_PAGES.Home}>{html}</Link>;
};
