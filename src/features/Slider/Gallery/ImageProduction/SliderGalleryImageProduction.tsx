"use client";

import { FC, useEffect, useMemo, useState } from "react";

import { cls } from '@/shared/lib/classes.lib';
import cl from './_SliderGalleryImageProduction.module.scss';

import { ImageProduction } from "@/shared/ui/Image/ui/Production/ui/ImageProduction";
import { SliderGallery } from "@/shared/ui/Slider/Gallery/SliderGallery";
import { ISliderGalleryTop } from "@/shared/model/slider.model";
import { SliderPagingVariant } from "@/shared/data/slider.data";
import { HandleSize } from "@/shared/ui/Handle/Size/HandleSize";
import { ImageProductionColor, ImageProductionVariant } from "@/shared/ui/Image/ui/Production/data/production.image.data";

interface SliderGalleryImageProductionProps extends ISliderGalleryTop<string> {
    isImageFullWindow?: boolean;
}

export const SliderGalleryImageProduction: FC<SliderGalleryImageProductionProps> = ({
    isImageFullWindow,
    items,
    itemPublic,
    itemOther,
    className,
    ...rest
}) => {
    // STATE
    const [is1024, setIs1024] = useState(false);
    const [is570, setIs570] = useState(false);

    // STATIC
    // Определение размера изображения на основе ширины экрана
    const sizeImage = is570 ? 310 : 520;

    // MEMO
    // Мемоизация условий
    const isSingleImageFullScreen = useMemo(
        () => is1024 && isImageFullWindow && items?.length === 1,
        [is1024, isImageFullWindow, items]
    );

    const memoizedItemPublic = useMemo(
        () => ({
            pagingVariant: SliderPagingVariant.Amount,
            slideWidth: sizeImage,
            isIndexChangeOnClick: true,
            componentProps: { width: sizeImage, height: sizeImage },
            gap: 5,
            ...itemPublic,
        }),
        [sizeImage, itemPublic]
    );

    const memoizedItemOther = useMemo(
        () => ({
            show: !is1024 && items && items?.length > 1,
            pagingVariant: SliderPagingVariant.Full,
            isIndexChangeOnClick: false,
            componentProps: { width: 100, height: 100 },
            gap: 10,
            ...itemOther,
        }),
        [is1024, items, itemOther]
    );

    return (
        <>
            {isSingleImageFullScreen ? (
                <ImageProduction
                    item={items![0]} 
                    width={sizeImage} 
                    height={sizeImage} 
                    variant={ImageProductionVariant.Default}
                    color={ImageProductionColor.Gray} 
                    className={cl.image}
                />
            ) : (
                <SliderGallery
                    component={ImageProduction}
                    items={items}
                    itemPublic={memoizedItemPublic}
                    itemOther={memoizedItemOther}
                    hasGalleryCounter={is1024}
                    className={cls(is1024 ? "" : cl.slider, className)}
                    {...rest}
                />
            )}
            <HandleSize width={1024} set={setIs1024} />
            <HandleSize width={570} set={setIs570} />
        </>
    );
};
