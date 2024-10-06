import { SliderPagingVariant } from "../data/slider.data";
import { IList, IListBase, IListTopLevel } from "./list.model";

export interface ISliderBase<T> extends IListBase<T> {
    isIndexChangeOnClick?: boolean
    classNameWrapper?: string,
    hasGalleryCounter?: boolean

    // slider
}


export interface ISliderGallery<T> extends IListBase<T> {
    pagingVariant?: SliderPagingVariant
    pagingAmount?: number
    slideWidth?: number
    isFull?: boolean
    isIndexChangeOnClick?: boolean
    classNameSlider?: string,
    classNameWrapper?: string,
    hasGalleryCounter?: boolean
}


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
