"use client"

import { FC, useState } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_CatalogButton.module.scss'
import { MAIN_PAGES } from "@/config/pages-url.config";
import { Button, ButtonVariant } from "@/shared/ui/Button";
import { ButtonColor, ButtonSize } from "@/shared/ui/Button/data/button.data";
import { CATALOG__BLACK__ICON } from "@/shared/data/icon/catalog.data.icon";
import { HandleSize } from "@/shared/ui/Handle/Size/HandleSize";

interface CatalogButtonProps{
    className?: string,
}

export const CatalogButton:FC<CatalogButtonProps> = ({className}) => {
    // STATE
    const [is520, setIs520] = useState(true);

    return (
        <>
            <Button variant={is520 ? ButtonVariant.ToBorder : ButtonVariant.ToFill}
                    color={is520 ? ButtonColor.Secondary : ButtonColor.Without} 
                    size={ButtonSize.Medium}
                    title={is520 ? '' : "Каталог"} 
                    href={MAIN_PAGES.Catalog} 
                    afterImage={is520 ? CATALOG__BLACK__ICON : undefined}
                    className={cl.catalog}/>
            <HandleSize width={520} set={setIs520} />
        </>
    )
}
