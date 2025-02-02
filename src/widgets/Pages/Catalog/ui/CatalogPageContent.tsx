import { FC } from "react"

import { ListDirection } from "@/shared/data/list.data";
import Wrapper1280 from "@/shared/ui/Wrapper/1280/Wrapper1280";
import { WrapperToolbar } from "@/shared/ui/Wrapper/Toolbar/WrapperToolbar";
import { QueryProduct } from "@/features/Query/Product/ui/QueryProduct";
import { ProductQueryType } from "@/features/Query/Product/data/product.query.data";
import { MAIN_PAGES } from "@/config/pages-url.config";


interface CatalogPageContentProps{
    className?: string,
}

export const CatalogPageContent:FC<CatalogPageContentProps> = ({className}) => {

    return (
        <Wrapper1280>
            <WrapperToolbar title="Каталог" searchLink={MAIN_PAGES.Catalog}>
                <QueryProduct 
                    requestType={ProductQueryType.Base} 
                    direction={ListDirection.Wrap}
                    hasPagination={true} baseLink={MAIN_PAGES.Catalog} />
            </WrapperToolbar>
        </Wrapper1280>
    )
}
