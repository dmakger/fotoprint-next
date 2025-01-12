import { FC, useState } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_SliderGallery.module.scss'
import { ISliderGallery } from "@/shared/model/slider.model";
import { Slider } from "../Slider";
import { IListTopLevel } from "@/shared/model/list.model";

interface SliderGalleryProps<T> extends ISliderGallery<T> {
// interface SliderGalleryProps<T> extends ISlider<T> {
}

export const SliderGallery = <T extends any>({
    itemPublic,
    itemOther,

    className,

    direction,
    ...rest
}: SliderGalleryProps<any>) => {
    // STATE
    const [activeIndex, setActiveIndex] = useState(0);

    // HANDLE
    const handleOnClickItem: IListTopLevel<string>['onClickItem'] = (it, index) => {
        if (index !== undefined) {
            setActiveIndex(index);
        }
    }

    return (
        <div className={cls(cl.wrapper, className)}>
            <Slider {...rest} 
                    {...itemPublic}
                    isFull={true} 
                    className={cl.sliderPublic}
                    setActiveIndex={setActiveIndex}
                    activeIndex={activeIndex}
                    />
            <Slider {...rest} 
                    {...itemOther} 
                    setActiveIndex={setActiveIndex}
                    activeIndex={activeIndex}
                    onClickItem={handleOnClickItem}
                    />
        </div>
    )
}
