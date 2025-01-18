import { FC } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_CatalogPageContent.module.scss'
import { ProductListContainer } from "@/entities/Product/ui/Base/List/Container/ProductListContainer";
import { ListDirection } from "@/shared/data/list.data";
import Wrapper1280 from "@/shared/ui/Wrapper/1280/Wrapper1280";
import { Txt } from "@/shared/ui/Txt/ui/Txt";
import { SmartTitle } from "@/shared/ui/SmartTitle/ui/SmartTitle";
import { SearchInput } from "@/features/Input/Search/SearchInput";

interface CatalogPageContentProps{
    className?: string,
}

export const CatalogPageContent:FC<CatalogPageContentProps> = ({className}) => {
    // !TODO : Add header "Catalog" | Search
    // !TODO : Add filters (https://periodica.press/products/photobooks/)

    return (
        <Wrapper1280 classNameContent={cls(cl.content, className)}>
            <div className={cl.top}>
                <SmartTitle defaultTitle="Каталог" />
                <SearchInput />
            </div>
            <ProductListContainer direction={ListDirection.Wrap}/>
        </Wrapper1280>
    )
}
