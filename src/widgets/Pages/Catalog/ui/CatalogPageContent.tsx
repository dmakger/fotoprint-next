import { FC } from "react"

import { ListDirection } from "@/shared/data/list.data";
import Wrapper1280 from "@/shared/ui/Wrapper/1280/Wrapper1280";
import { TagAll } from "@/shared/data/tag.data";
import { WrapperToolbar } from "@/shared/ui/Wrapper/Toolbar/WrapperToolbar";
import { QueryProduct } from "@/features/Query/Product/ui/QueryProduct";
import { ProductQueryType } from "@/features/Query/Product/data/product.query.data";
import { MAIN_PAGES } from "@/config/pages-url.config";


interface CatalogPageContentProps{
    className?: string,
}

export const CatalogPageContent:FC<CatalogPageContentProps> = ({className}) => {

    return (
        <Wrapper1280 tag={TagAll.Main}>
            <WrapperToolbar title="Каталог" searchLink={MAIN_PAGES.Catalog}>
                {/* <ProductListContainer direction={ListDirection.Wrap}/> */}
                <QueryProduct 
                    requestType={ProductQueryType.Base} 
                    direction={ListDirection.Wrap}/>
            </WrapperToolbar>
        </Wrapper1280>
    )
}
