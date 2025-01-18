import { ReactNode } from "react"
import { IModal } from "./modal.model"
import { IButtonWORef } from "../../Button/model/button.model"


/**
 * Пропсы для компонента `ModalAction`
 */
export interface IModalAction extends IModal {
    title: string
    text?: string[] | ReactNode[]
    
    buttonFirst?: IButtonWORef
    buttonSecond?: IButtonWORef
    
    hasBackground?: boolean,
    imageBackgroundSrc?: string,
    classNameShowBackgroundImage?: string
    
    isLoading?: boolean
    className?: string,
    classNameModalAction?: string,
    classNameSidebar?: string,
}
