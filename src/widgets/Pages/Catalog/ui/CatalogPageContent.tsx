import { FC } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_CatalogPageContent.module.scss';

import { ProductListContainer } from "@/entities/Product/ui/Base/List/Container/ProductListContainer";
import { ListDirection } from "@/shared/data/list.data";
import Wrapper1280 from "@/shared/ui/Wrapper/1280/Wrapper1280";
import { TagAll } from "@/shared/data/tag.data";
import { WrapperToolbar } from "@/shared/ui/Wrapper/Toolbar/WrapperToolbar";


interface CatalogPageContentProps{
    className?: string,
}

export const CatalogPageContent:FC<CatalogPageContentProps> = ({className}) => {

    return (
        <Wrapper1280 tag={TagAll.Main}>
            <WrapperToolbar title="Каталог">
                <ProductListContainer direction={ListDirection.Wrap}/>
            </WrapperToolbar>
        </Wrapper1280>
    )
}
