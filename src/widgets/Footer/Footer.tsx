import { FC } from "react"
import Link from "next/link";

import { cls } from '@/shared/lib/classes.lib';
import cl from './_Footer.module.scss';

import Wrapper1280 from "@/shared/ui/Wrapper/1280/Wrapper1280";



interface FooterProps{
    className?: string,
}

export const Footer:FC<FooterProps> = ({className}) => {
    return (
        <footer className={cl.footer}>
            <Wrapper1280 
                className={cls(cl.wrapper, className)}
                classNameContent={cl.wrapperContent}
            >
                <span>©2023—2025. Фотопринт</span>
                <div className={cl.linkContainer}>
                    <Link href="https://t.me/dmakger/" passHref legacyBehavior>
                        <a className={cl.link} target="_blank" rel="noopener noreferrer">
                            Developed by — dmakger
                        </a>
                    </Link>
                </div>
            </Wrapper1280>
        </footer>
    )
}
