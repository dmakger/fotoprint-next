import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { skipToken } from "@reduxjs/toolkit/query";

import { cls } from '@/shared/lib/classes.lib';
import cl from './_ProductPageContentClient.module.scss';
import { ProductAPI } from "@/entities/Product/api/product.api";
import { TListItemOnClick } from "@/shared/model/list.model";
import { ICombination } from "@/entities/Metric/model/characteristic.metric.model";
import { MAIN_PAGES } from "@/config/pages-url.config";
import { CombinationList } from "@/entities/Metric/ui/Combination/List/CombinationList";
import { ProductFormBlock } from "@/entities/Product/ui/Form/this/ui/ProductFormBlock";
import { ListDirection } from "@/shared/data/list.data";
import { WrapperBlock } from "@/shared/ui/Wrapper/Block/ui/WrapperBlock";

interface ProductPageContentClientProps {
    setImages?: Dispatch<SetStateAction<string[]>>;
    setTitle?: Dispatch<SetStateAction<string | undefined>>;
    setPrice?: Dispatch<SetStateAction<number>>;
    className?: string;
}

export const ProductPageContentClient: FC<ProductPageContentClientProps> = ({
    setImages,
    setTitle,
    setPrice,
    className
}) => {
    // PARAMS
    const { id } = useParams();
    const router = useRouter();

    // API
    const { data: product, isLoading: productLoading } = ProductAPI.useGetDetailProductQuery(Array.isArray(id) ? id[0] : id);
    const { data: combinations } = ProductAPI.useGetCombinationsProductQuery(product?.id ?? skipToken);
    const { data: forms } = ProductAPI.useGetFormsProductQuery(product?.id ?? skipToken);

    // HANDLE
    const handleOnClickCharacteristic: TListItemOnClick<ICombination> = (it) => {
        if (it.productCombinationId) {
            router.push(MAIN_PAGES.PRODUCT(it.productCombinationId));
        }
    };

    // EFFECT
    useEffect(() => {
        if (!productLoading && product) {
            // Обновляем данные только после полной загрузки
            setImages?.(_ => {
                const images = product.image ? [product.image] : []
                if (product.images)
                    images.push(...product.images)
                return images
            });
            setTitle?.(product.title || undefined);
            setPrice?.(product.price || 0);
        }
    }, [product, productLoading]);

    return (
        <>
            <WrapperBlock className={cls(cl.options, className)}>
                {combinations && combinations.combinations.map((it, index) => (
                    <CombinationList 
                        items={it} 
                        onClickItem={handleOnClickCharacteristic}
                        direction={ListDirection.Wrap} 
                        hasTitleGroup={true} 
                        key={index} />
                ))}
            </WrapperBlock>

            {forms && forms.map(it => (
                <ProductFormBlock 
                    productForm={it}
                    setPrice={setPrice} 
                    key={it.id} />
            ))}

            {productLoading && <div className={cl.loading}>Загрузка...</div>}
        </>
    );
};
