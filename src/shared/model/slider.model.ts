import { SliderPagingVariant } from "../data/slider.data";
import { IList, IListBase, IListBaseOnlyItem, IListTopLevel } from "./list.model";

export interface ISliderGalleryTop<T> extends IListBase<T> {
    itemPublic?: ISliderGalleryItem
    itemOther?: ISliderGalleryItem

    isFull?: boolean
    isIndexChangeOnClick?: boolean
    classNameGallery?: string
    hasGalleryCounter?: boolean
}

export interface ISliderGallery<T> extends ISliderGalleryTop<T> {
    component: IList<T>['component']
}

export interface ISliderGalleryItem {
    pagingVariant?: SliderPagingVariant
    pagingAmount?: number
    slideWidth?: number
    isIndexChangeOnClick?: boolean
    componentProps?: IListBaseOnlyItem<any>["componentProps"]
    classNameSlider?: string,
    classNameWrapper?: string,

    gap?: IListBase<any>['gap']
    direction?: IListBase<any>['direction']
}


export interface ISliderBase<T> extends IListBase<T> {
    isIndexChangeOnClick?: boolean
    classNameWrapper?: string,
    hasGalleryCounter?: boolean

    // slider
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
