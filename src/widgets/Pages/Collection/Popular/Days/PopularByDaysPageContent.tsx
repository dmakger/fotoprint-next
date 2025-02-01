import { FC } from "react"

import { WrapperToolbar } from "@/shared/ui/Wrapper/Toolbar/WrapperToolbar";
import { IProductPopularRequest } from "@/entities/Product/model/props.product.model";
import { getPopularProductsByDays } from "@/widgets/Shelf/Product/Popular/lib/popular.product.shelf.lib";
import { QueryProduct } from "@/features/Query/Product/ui/QueryProduct";
import { ProductQueryType } from "@/features/Query/Product/data/product.query.data";
import { ListDirection } from "@/shared/data/list.data";
import { MAIN_PAGES } from "@/config/pages-url.config";

interface PopularByDaysPageContentProps{
    days: IProductPopularRequest['days']
    className?: string,
}

export const PopularByDaysPageContent:FC<PopularByDaysPageContentProps> = ({
    days,
    className,
}) => {    
    // STATIC
    const popularProductMetaData = getPopularProductsByDays(days)

    return (
        <WrapperToolbar 
            title={popularProductMetaData.title} 
            searchLink={MAIN_PAGES.CollectionPopularByDays(days)}
            className={className}
        >
            <QueryProduct 
                requestType={ProductQueryType.Popular}
                props={{days}}
                direction={ListDirection.Wrap}/>
        </WrapperToolbar>
    )
}
