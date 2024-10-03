"use client"

import { FC, useState } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_ProductPageContent.module.scss'
import { useParams } from "next/navigation";
import { ProductAPI } from "@/entities/Product/api/product.api";
import { skipToken } from "@reduxjs/toolkit/query";
import { ICharacteristicGroupToCharacteristic, ICombination } from "@/entities/Metric/model/characteristic.metric.model";
import { CharacteristicList } from "@/entities/Metric/ui/Characteristic/List/CharacteristicList";
import { ListDirection } from "@/shared/data/list.data";
import { TListItemOnClick } from "@/shared/model/list.model";
import { useRouter } from "next/navigation";
import { MAIN_PAGES } from "@/config/pages-url.config";
import { privateDecrypt } from "crypto";
import { Price } from "@/shared/ui/Price/Price";
import { PriceVariant } from "@/shared/data/price.data";
import { Button } from "@/shared/ui/Button";
import { ButtonColor, ButtonSize } from "@/shared/ui/Button/model/button.model";
import { ImageProductionSlider } from "@/features/Slider/ImageProduction/ImageProductionSlider";

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

    console.log('qwe ', product)
    console.log('qwe forms', forms)

    // HANDLE
    const handleOnClickCharacteristic: TListItemOnClick<ICombination> = (it) => {
        console.log('qwe handleOnClickCharacteristic', it)
        if (it.productCombinationId)
            router.push(MAIN_PAGES.PRODUCT(it.productCombinationId))
    }
    
    return (
        <div className={cls(cl.block, className)}>
            <div className={cl.main}>
                {/* <div className={cl.slider}></div> */}
                <ImageProductionSlider 
                    items={product?.images ?? []} 
                    componentProps={{width: 100, height: 100}} />
                <div className={cl.info}>
                    <h1 className={cl.title}>{product?.title}</h1>
                    <div className={cl.wrapperPrice}>
                        <Price price={product?.price ?? 0} variant={PriceVariant.Text} />
                        <Button title={"Добавить в корзину"} 
                                color={ButtonColor.Secondary} size={ButtonSize.Small} isRounded={false}
                                className={cl.addCart} />
                    </div>
                    <div className={cl.options}>
                        {combinations && combinations.combinations.map((it, index) => (
                            <CharacteristicList 
                                items={it} 
                                onClickItem={handleOnClickCharacteristic}
                                direction={ListDirection.Wrap} 
                                hasTitleGroup={true} 
                                key={index} />
                        ))}

                        {/* {forms && forms.} */}
                    </div>
                </div>
            </div>
            {/* {JSON.stringify(combinations)} */}
        </div>
    )
}
