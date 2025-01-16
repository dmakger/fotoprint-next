"use client"

import { FC, useState } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_SliderGalleryImageProduction.module.scss';

import { ImageProduction } from "@/shared/ui/Image/ui/Production/ui/ImageProduction";
import { SliderGallery } from "@/shared/ui/Slider/Gallery/SliderGallery";
import { ISliderGalleryTop } from "@/shared/model/slider.model";
import { SliderPagingVariant } from "@/shared/data/slider.data";
import { HandleSize } from "@/shared/ui/Handle/Size/HandleSize";
import { ImageProductionColor, ImageProductionVariant } from "@/shared/ui/Image/ui/Production/data/production.image.data";

interface SliderGalleryImageProductionProps extends ISliderGalleryTop<string>{
    isImageFullWindow?: boolean
}

export const SliderGalleryImageProduction:FC<SliderGalleryImageProductionProps> = ({
    isImageFullWindow,

    items,
    itemPublic,
    itemOther,
    className,
    ...rest
}) => {
    // STATE
    const [is1024, setIs1024] = useState(false);

    return (
        <>
            {(is1024 && isImageFullWindow && items.length === 1) ? (
                <ImageProduction item={items[0]} 
                                 width={520} 
                                 height={520} 
                                 variant={ImageProductionVariant.Default}
                                 color={ImageProductionColor.Gray} 
                                 className={cl.image} />
            ) : (
                <SliderGallery 
                    component={ImageProduction} 
                    items={items}
                    itemPublic={{
                        pagingVariant: SliderPagingVariant.Amount,
                        slideWidth: 520,
                        isIndexChangeOnClick: true,
                        componentProps: {width: 520, height: 520},
                        gap: 5,
                        ...itemPublic
                    }}
                    itemOther={{
                        show: !is1024 && items.length > 1,
                        pagingVariant: SliderPagingVariant.Full,
                        isIndexChangeOnClick: false,
                        componentProps: {width: 100, height: 100},
                        gap: 10,
                        ...itemOther
                    }}
                    hasGalleryCounter={is1024}
                    className={cls(is1024 ? '' : cl.slider , className)}
                    {...rest}
                />
            )}
            <HandleSize width={1024} set={setIs1024}/>
        </>
    )
}
