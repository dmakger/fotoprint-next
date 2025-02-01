import { ReactNode } from "react"
import { EModalView } from "../data/modal.data"
import { IButtonWORef } from "../../Button/model/button.model"




/**
 * Пропсы для компонента `Modal`
 */
export interface IModal {
    isOpen?: boolean
    onClickOverlay?: Function
    view?: EModalView
    hasBlack?: boolean
    hasClose?: boolean
    propsButtonClose?: IButtonWORef
    
    buttonNode?: ReactNode
}