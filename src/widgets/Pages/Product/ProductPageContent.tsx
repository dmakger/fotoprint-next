"use client"

import { FC, useEffect, useState } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_ProductPageContent.module.scss'
import { useParams } from "next/navigation";
import { ProductAPI } from "@/entities/Product/api/product.api";
import { skipToken } from "@reduxjs/toolkit/query";
import { ICharacteristic, ICharacteristicGroupToCharacteristic, ICombination } from "@/entities/Metric/model/characteristic.metric.model";
import { formattedCombinationProductList } from "@/entities/Product/lib/combination.product.lib";
import { CharacteristicList } from "@/entities/Metric/ui/Characteristic/List/CharacteristicList";
import { ListDirection } from "@/shared/data/list.data";
import { TListItemOnClick } from "@/shared/model/list.model";
import { useRouter } from "next/navigation";
import { MAIN_PAGES } from "@/config/pages-url.config";

interface ProductPageContentProps{
    className?: string,
}

export const ProductPageContent:FC<ProductPageContentProps> = ({className}) => {
    // PARAMS
    const {id} = useParams();
    const router = useRouter()

    // STATE
    const [combinationProducts, setCombinationProducts] = useState<ICharacteristicGroupToCharacteristic[]>([])

    // API
    const {data: product} = ProductAPI.useGetDetailProductQuery(Array.isArray(id) ? id[0] : id)
    const {data: combinations} = ProductAPI.useGetCombinationsProductQuery(product?.id ?? skipToken)

    // console.log('qwe product', product)
    // console.log('qwe combinations', combinations)
    // console.log('qwe combinationProducts', combinationProducts)

    // EFFECT
    // useEffect(() => {
    //     if (combinations)
    //         setCombinationProducts(formattedCombinationProductList(combinations, product?.id))
    // }, [combinations])

    // HANDLE
    const handleOnClickCharacteristic: TListItemOnClick<ICombination> = (it) => {
        console.log('qwe handleOnClickCharacteristic', it)
        router.push(MAIN_PAGES.PRODUCT(it.id))
    }
    
    return (
        <div className={cls(className)}>
            {JSON.stringify(combinations)}
            <div className={cl.options}>
                {combinations && combinations.combinations.map((it, index) => (
                    <CharacteristicList 
                        items={it} 
                        onClickItem={handleOnClickCharacteristic}
                        direction={ListDirection.Wrap} 
                        hasTitleGroup={true} 
                        key={index} />
                ))}
            </div>
        </div>
    )
}
