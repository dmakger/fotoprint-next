import { ReactNode } from "react"

import { EModalView } from "@/shared/data/modal.data"
import { IButtonWORef } from "../../Button/data/button.data"



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