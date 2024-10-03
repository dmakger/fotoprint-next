import { FC } from "react"

import { ISliderTop } from "@/shared/model/slider.model";
import { Slider } from "@/shared/ui/Slider/Slider";
import { ImageProductionSliderItem } from "./Item/ImageProductionSliderItem";

interface ImageProductionSliderProps extends ISliderTop<string>{}

export const ImageProductionSlider:FC<ImageProductionSliderProps> = ({...rest}) => {
    return (
        <Slider component={ImageProductionSliderItem} 
                 {...rest}/>
    )
}
