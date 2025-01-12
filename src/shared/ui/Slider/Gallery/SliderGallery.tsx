import { useState } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_SliderGallery.module.scss'
import { ISliderGallery } from "@/shared/model/slider.model";
import { Slider } from "../Slider";
import { IListTopLevel } from "@/shared/model/list.model";

interface SliderGalleryProps<T> extends ISliderGallery<T> {
// interface SliderGalleryProps<T> extends ISlider<T> {
}

export const SliderGallery = <T extends any>({
    itemPublic: itemPublicOut,
    itemOther: itemOtherOut,

    className,

    direction,
    hasGalleryCounter,
    ...rest
}: SliderGalleryProps<any>) => {
    // GET
    const {show: showPublic, ...itemPublic} = itemPublicOut || {};
    const {show: showOther, ...itemOther} = itemOtherOut || {};

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
            {(showPublic !== false) && (
                <Slider {...rest} 
                        {...itemPublic}
                        className={cl.sliderPublic}
                        setActiveIndex={setActiveIndex}
                        hasGalleryCounter={hasGalleryCounter}
                        activeIndex={activeIndex}
                        />
            )}
            {(showOther !== false) && (
                <Slider {...rest} 
                        {...itemOther} 
                        setActiveIndex={setActiveIndex}
                        activeIndex={activeIndex}
                        onClickItem={handleOnClickItem}
                        />
            )}
        </div>
    )
}
