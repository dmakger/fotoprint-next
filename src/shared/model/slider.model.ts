import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { SliderPagingVariant } from "../data/slider.data";
import { IList, IListTopLevel } from "./list.model";

export interface ISliderTop<T> extends IListTopLevel<T> {
    pagingVariant?: SliderPagingVariant
    pagingAmount?: number
    slideWidth?: number
    isFull?: boolean
    isIndexChangeOnClick?: boolean
    classNameSlider?: string,
    classNameWrapper?: string,
    hasGalleryCounter?: boolean
}

export interface ISlider<T> extends ISliderTop<T> {
    component: IList<T>['component']
}
