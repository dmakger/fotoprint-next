import { FC } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_SliderGallery.module.scss'
import { ISlider, ISliderGallery } from "@/shared/model/slider.model";
import { Slider } from "../Slider";
import { ListDirection } from "@/shared/data/list.data";
import { SliderPagingVariant } from "@/shared/data/slider.data";

interface SliderGalleryProps<T> extends ISliderGallery<T> {
// interface SliderGalleryProps<T> extends ISlider<T> {
}

export const SliderGallery = <T extends any>({
    itemPublic,
    itemOther,

    classNameGallery,

    direction,
    ...rest
}: SliderGalleryProps<any>) => {
    return (
        <div className={cls(cl.wrapper, classNameGallery)}>
            <Slider isFull={true} gap={0}
                    {...itemPublic} 
                    pagingVariant={SliderPagingVariant.Full}
                    slideWidth={itemPublic?.slideWidth ?? 520}
                    className={cl.sliderPublic}
                    // componentProps={{width: 520, height: 520}}
                    {...rest} />
            <Slider direction={ListDirection.Row} {...rest} />
        </div>
    )
}
