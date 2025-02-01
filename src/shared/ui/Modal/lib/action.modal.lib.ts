import { IModalAction } from "@/shared/ui/Modal/model/action.modal.model"
import { EModalView } from "../data/modal.data"

/**
 * @returns пустой `IModalAction` 
 */
export const getEmptyModalAction = (): IModalAction => {
    return {
        title: '',
        view: EModalView.Center,
        isOpen: false,
    }
}