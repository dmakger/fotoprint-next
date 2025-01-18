import { FC } from "react"

import cl from './_Header.module.scss'
import Wrapper1280 from "@/shared/ui/Wrapper/1280/Wrapper1280";
import { Logo } from "@/shared/ui/Logo/Logo";
import { MAIN_PAGES } from "@/config/pages-url.config";
import { Button, ButtonVariant } from "@/shared/ui/Button";
import { ButtonColor, ButtonSize } from "@/shared/ui/Button/data/button.data";
import { SEARCH_BLACK__ICON } from "@/shared/data/icon/search.data.icon";

interface HeaderProps {}

export const Header:FC<HeaderProps> = () => {
    return (
        <Wrapper1280 className={cl.wrapper} classNameContent={cl.wrapperContent}>
            <Button size={ButtonSize.Small}
                    color={ButtonColor.Secondary}
                    variant={ButtonVariant.ToBorder}
                    href={MAIN_PAGES.Catalog}
                    beforeImage={SEARCH_BLACK__ICON} 
                    beforeProps={{width: 20, height: 20}}/>
            <Logo isLink={true} />
            <Button title="Каталог" 
                    href={MAIN_PAGES.Catalog} 
                    variant={ButtonVariant.Text}
                    color={ButtonColor.Secondary} />
        </Wrapper1280>
    )
}
