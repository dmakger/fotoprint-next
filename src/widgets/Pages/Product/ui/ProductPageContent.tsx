"use client";

import { FC, useState } from "react";

import { cls } from '@/shared/lib/classes.lib';
import cl from './_ProductPageContent.module.scss';

import { Price } from "@/shared/ui/Price/Price";
import { PriceVariant } from "@/shared/data/price.data";
import { Button } from "@/shared/ui/Button";
import { ButtonColor, ButtonSize } from "@/shared/ui/Button/data/button.data";
import { ProductPageContentClient } from "../components/ProductPageContentClient";
import { WrapperBlock } from "@/shared/ui/Wrapper/Block/ui/WrapperBlock";
import { WrapperBlockSize, WrapperBlockVariant } from "@/shared/ui/Wrapper/Block/data/block.wrapper.data";
import { HandleSize } from "@/shared/ui/Handle/Size/HandleSize";
import { SliderGalleryImageProduction } from "@/features/Slider/Gallery/ImageProduction/SliderGalleryImageProduction";
import { StickyTitle } from "@/features/Sticky/Title/StickyTitle";


interface ProductPageContentProps {
    className?: string;
}

export const ProductPageContent: FC<ProductPageContentProps> = ({ className }) => {
    // STATE
    const [is1024, setIs1024] = useState(false);
    
    const [images, setImages] = useState<string[]>([]);
    const [title, setTitle] = useState<string>();
    const [price, setPrice] = useState<number>(0);

    // HTML
    const htmlTitle = (
        <WrapperBlock variant={WrapperBlockVariant.Wide} 
                      size={WrapperBlockSize.Middle}
                      className={cl.stickyTitle}>
            <h1 className={cl.title}>{title ?? "Нет товара"}</h1>
            <div className={cl.wrapperPrice}>
                <Price price={price} variant={PriceVariant.Text} />
                <Button title={"Добавить в корзину"} 
                        color={ButtonColor.Secondary} size={ButtonSize.Small} isRounded={false}
                        disabled={true}
                        className={cl.addCart} />
            </div>
        </WrapperBlock>
    )

    return (
        <>
            <div className={cls(cl.block, className)}>
                <div className={cl.main}>
                    {is1024 && htmlTitle}
                    <StickyTitle title={title} price={price} />
                    <div className={cl.left}>
                        <SliderGalleryImageProduction items={images} isImageFullWindow={true} />
                    </div>
                    <div className={cl.info}>
                        {!is1024 && htmlTitle}

                        <ProductPageContentClient
                            setImages={setImages}
                            setTitle={setTitle} 
                            setPrice={setPrice} />
                    </div>
                </div>
            </div>
            <HandleSize width={1024} set={setIs1024}/>
        </>
    );
};
