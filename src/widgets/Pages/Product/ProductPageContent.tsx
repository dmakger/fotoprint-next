"use client"

import { FC, useEffect, useState } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_ProductPageContent.module.scss'
import { useParams } from "next/navigation";
import { ProductAPI } from "@/entities/Product/api/product.api";
import { skipToken } from "@reduxjs/toolkit/query";
import { ICharacteristic, ICharacteristicGroupToCharacteristic } from "@/entities/Metric/model/characteristic.metric.model";
import { formattedCombinationProductList } from "@/entities/Product/lib/combination.product.lib";
import { CharacteristicList } from "@/entities/Metric/ui/Characteristic/List/CharacteristicList";
import { ListDirection } from "@/shared/data/list.data";

interface ProductPageContentProps{
    className?: string,
}

export const ProductPageContent:FC<ProductPageContentProps> = ({className}) => {
    // PARAMS
    const {id} = useParams();

    // STATE
    const [combinationProducts, setCombinationProducts] = useState<ICharacteristicGroupToCharacteristic[]>([])

    // API
    const {data: product} = ProductAPI.useGetDetailProductQuery(Array.isArray(id) ? id[0] : id)
    const {data: combinations} = ProductAPI.useGetCombinationsProductQuery(product?.parentId ?? skipToken)

    // console.log('product', product)
    // console.log('combinations', combinations)
    // console.log('combinationProducts', combinationProducts)

    // EFFECT
    useEffect(() => {
        if (combinations)
            setCombinationProducts(formattedCombinationProductList(combinations, product?.id))
    }, [combinations])

    
    return (
        <div className={cls(className)}>
            {JSON.stringify(combinations)}
            <div className={cl.options}>
                {combinationProducts.map(it => (
                    <CharacteristicList items={it.characteristics} direction={ListDirection.Wrap} hasTitleGroup={true} />
                ))}
            </div>
        </div>
    )
}
