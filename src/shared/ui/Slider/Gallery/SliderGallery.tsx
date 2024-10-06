import { FC } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_SliderGallery.module.scss'
import { ISlider } from "@/shared/model/slider.model";
import { Slider } from "../Slider";
import { ListDirection } from "@/shared/data/list.data";

interface SliderGalleryProps<T> extends ISlider<T> {
    classNameGallery?: string
}

export const SliderGallery = <T extends any>({
    classNameGallery,
    
    direction,
    ...rest
}: SliderGalleryProps<any>) => {
    return (
        <div className={cls(cl.wrapper, classNameGallery)}>
            <Slider direction={ListDirection.Column} {...rest} />
            <Slider isFull={true} gap={0} {...rest} />
        </div>
    )
}
