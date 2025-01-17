import { FC } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_ProductSlider.module.scss'
import { Slider } from "@/shared/ui/Slider/Slider";
import { ISliderTop } from "@/shared/model/slider.model";
import { IProduct } from "../../../../entities/Product/model/product.model";
import { ProductItem } from "../../../../entities/Product/ui/Base/Item/ProductItem";

interface ProductSliderProps extends ISliderTop<IProduct>{
}

export const ProductSlider:FC<ProductSliderProps> = ({
    className,
    ...rest
}) => {
    return (
        <Slider component={ProductItem} 
                {...rest} />
    )
}
