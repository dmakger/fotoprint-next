import { ISlider, ISliderTop } from "@/shared/model/slider.model"
import { ReactNode } from "react"

/**
 * Полка - слайдер c названием и ссылкой 
 */
export interface IShelf<T> extends IShelfBase<T> {
    title: string
    sliderParams: ISlider<T>
}


/**
 * Полка - слайдер c названием и ссылкой.  
 * Интерфейс необходим для перереализации в компонентах
 */
export interface IShelfTop<T> extends IShelfBase<T> {
    title?: string
    sliderParams: ISliderTop<T>
}


/**
 * Основа для `Полки` 
 */
export interface IShelfBase<T> {
    href?: string
    hrefTitle?: string

    className?: string
    classNameTitle?: string
}
