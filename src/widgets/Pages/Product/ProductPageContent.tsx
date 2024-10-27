"use client"

import { FC } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_ProductPageContent.module.scss'
import { useParams } from "next/navigation";
import { ProductAPI } from "@/entities/Product/api/product.api";
import { skipToken } from "@reduxjs/toolkit/query";
import { ICombination } from "@/entities/Metric/model/characteristic.metric.model";
import { ListDirection } from "@/shared/data/list.data";
import { TListItemOnClick } from "@/shared/model/list.model";
import { useRouter } from "next/navigation";
import { MAIN_PAGES } from "@/config/pages-url.config";
import { Price } from "@/shared/ui/Price/Price";
import { PriceVariant } from "@/shared/data/price.data";
import { Button } from "@/shared/ui/Button";
import { ButtonColor, ButtonSize } from "@/shared/ui/Button/model/button.model";
import { ImageProductionSlider } from "@/features/Slider/ImageProduction/ImageProductionSlider";
import { SliderGallery } from "@/shared/ui/Slider/Gallery/SliderGallery";
import { ImageProduction } from "@/shared/ui/Image/ui/Production/ui/ImageProduction";
import { WrapperBlockSize, WrapperBlockVariant } from "@/shared/ui/Wrapper/Block/data/block.wrapper.data";
import { ProductFormBlock } from "@/entities/Product/ui/Form/this/ui/ProductFormBlock";
import { WrapperBlock } from "@/shared/ui/Wrapper/Block/ui/WrapperBlock";
import { CombinationList } from "@/entities/Metric/ui/Combination/List/CombinationList";

interface ProductPageContentProps{
    className?: string,
}

export const ProductPageContent:FC<ProductPageContentProps> = ({className}) => {
    // PARAMS
    const {id} = useParams();
    const router = useRouter()

    // API
    const {data: product} = ProductAPI.useGetDetailProductQuery(Array.isArray(id) ? id[0] : id)
    const {data: combinations} = ProductAPI.useGetCombinationsProductQuery(product?.id ?? skipToken)
    const {data: forms} = ProductAPI.useGetFormsProductQuery(product?.id ?? skipToken)

    // HANDLE
    const handleOnClickCharacteristic: TListItemOnClick<ICombination> = (it) => {
        if (it.productCombinationId)
            router.push(MAIN_PAGES.PRODUCT(it.productCombinationId))
    }
    
    return (
        <div className={cls(cl.block, className)}>
            <div className={cl.main}>
                {/* <div className={cl.slider}></div> */}
                {/* <ImageProductionSlider 
                    items={product?.images ?? []} 
                    componentProps={{width: 100, height: 100}}
                    direction={ListDirection.Column} /> */}
                <SliderGallery component={ImageProduction} items={product?.images ?? []} componentProps={{width: 100, height: 100}} />
                <div className={cl.info}>
                    <WrapperBlock variant={WrapperBlockVariant.Wide} size={WrapperBlockSize.Middle}>
                        <h1 className={cl.title}>{product?.title}</h1>
                        <div className={cl.wrapperPrice}>
                            <Price price={product?.price ?? 0} variant={PriceVariant.Text} />
                            <Button title={"Добавить в корзину"} 
                                    color={ButtonColor.Secondary} size={ButtonSize.Small} isRounded={false}
                                    className={cl.addCart} />
                        </div>
                    </WrapperBlock>

                    <WrapperBlock className={cl.options}>
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
                        <ProductFormBlock productForm={it} key={it.id} />
                    ))}
                </div>
            </div>
        </div>
    )
}
