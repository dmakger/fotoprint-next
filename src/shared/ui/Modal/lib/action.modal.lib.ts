import { EModalView } from "@/shared/data/modal.data"
import { IModalAction } from "@/shared/ui/Modal/model/action.modal.model"

/**
 * @returns пустой `IModalAction` 
 */
export const getEmptyModalAction = (): IModalAction => {
    return {
        title: '',
        view: EModalView.CENTER,
        isOpen: false,
    }
}