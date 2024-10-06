import { FC } from "react"

import { ISliderTop } from "@/shared/model/slider.model";
import { Slider } from "@/shared/ui/Slider/Slider";
import { ImageProduction } from "@/shared/ui/Image/ui/Production/ui/ImageProduction";

interface ImageProductionSliderProps extends ISliderTop<string>{}

export const ImageProductionSlider:FC<ImageProductionSliderProps> = ({...rest}) => {
    return (
        <Slider component={ImageProduction} {...rest}/>
    )
}
