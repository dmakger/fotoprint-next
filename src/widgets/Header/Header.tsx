import { FC } from "react"

import cl from './_Header.module.scss'
import Wrapper1280 from "@/shared/ui/Wrapper/1280/Wrapper1280";
import { Logo } from "@/shared/ui/Logo/Logo";
import { SearchInput } from "@/features/Input/Search/SearchInput";

interface HeaderProps{
}

export const Header:FC<HeaderProps> = () => {
    return (
        <Wrapper1280 className={cl.wrapper} classNameContent={cl.wrapperContent}>
            <Logo isLink={true} />
            {/* <CategoryModal /> */}
            <SearchInput />
        </Wrapper1280>
    )
}
