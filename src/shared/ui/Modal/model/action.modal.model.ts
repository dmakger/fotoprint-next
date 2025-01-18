import { ReactNode } from "react"
import { EInputTextType } from "../../Input/ui/Text/data/text.input.data"
import { IButtonWORef } from "../../Button/data/button.data"
import { IModal } from "./modal.model"


/**
 * Пропсы для компонента `ModalAction`
 */
export interface IModalAction extends IModal {
    title: string
    text?: string[] | ReactNode[]

    inputProps?: IModalActionInput,
    classNameWrapperInput?: string
    additionInputButtonText?: string
    
    buttonFirst?: IButtonWORef
    buttonSecond?: IButtonWORef
    
    hasBackground?: boolean,
    imageBackgroundSrc?: string,
    classNameShowBackgroundImage?: string
    
    isLoading?: boolean
    className?: string,
}


/**
 * Пропсы для `Input.Text` в `ModalAction`
 */
export interface IModalActionInput {
    type: EInputTextType
    labelText: string
    placeholder: string
    setText: (text: string) => void
    defaultValue?: string
}
