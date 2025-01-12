"use client";

import { FC, useState } from "react";
import { cls } from '@/shared/lib/classes.lib';
import cl from './_ProductPageContent.module.scss';
import { Price } from "@/shared/ui/Price/Price";
import { PriceVariant } from "@/shared/data/price.data";
import { Button } from "@/shared/ui/Button";
import { ButtonColor, ButtonSize } from "@/shared/ui/Button/model/button.model";
import { SliderGallery } from "@/shared/ui/Slider/Gallery/SliderGallery";
import { ImageProduction } from "@/shared/ui/Image/ui/Production/ui/ImageProduction";
import { ProductPageContentClient } from "../components/ProductPageContentClient";
import { WrapperBlock } from "@/shared/ui/Wrapper/Block/ui/WrapperBlock";
import { WrapperBlockSize, WrapperBlockVariant } from "@/shared/ui/Wrapper/Block/data/block.wrapper.data";
import { SliderPagingVariant } from "@/shared/data/slider.data";

interface ProductPageContentProps {
    className?: string;
}

export const ProductPageContent: FC<ProductPageContentProps> = ({ className }) => {
    // STATE
    const [images, setImages] = useState<string[]>([]);
    const [title, setTitle] = useState<string | null>(null);
    const [price, setPrice] = useState<number>(0);

    return (
        <div className={cls(cl.block, className)}>
            <div className={cl.main}>
                <SliderGallery 
                    component={ImageProduction} 
                    items={images}
                    itemPublic={{
                        pagingVariant: SliderPagingVariant.Full,
                        isIndexChangeOnClick: true,
                        componentProps: {width: 520, height: 520},
                        gap: 5,
                    }}
                    itemOther={{
                        pagingVariant: SliderPagingVariant.Full,
                        isIndexChangeOnClick: false,
                        componentProps: {width: 100, height: 100},
                        gap: 10,
                    }}
                    className={cl.slider}
                    />
                <div className={cl.info}>
                    <WrapperBlock variant={WrapperBlockVariant.Wide} size={WrapperBlockSize.Middle}>
                        <h1 className={cl.title}>{title ?? "Нет товара"}</h1>
                        <div className={cl.wrapperPrice}>
                            <Price price={price} variant={PriceVariant.Text} />
                            <Button title={"Добавить в корзину"} 
                                    color={ButtonColor.Secondary} size={ButtonSize.Small} isRounded={false}
                                    className={cl.addCart} />
                        </div>
                    </WrapperBlock>

                    <ProductPageContentClient
                        setImages={setImages}
                        setTitle={setTitle} 
                        setPrice={setPrice} />
                </div>
            </div>
        </div>
    );
};
