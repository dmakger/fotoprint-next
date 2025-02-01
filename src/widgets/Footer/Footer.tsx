import { FC } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_Footer.module.scss';

import { LogoBlock } from "@/shared/ui/Logo/Block/LogoBlock";
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
                {/* <LogoBlock />
                <div className={cl.column}> */}
                    <p>©2025. Фотопринт</p>
                    <p>Разработано — dmakger</p>
                {/* </div>  */}
            </Wrapper1280>
        </footer>
    )
}
