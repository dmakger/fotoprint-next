import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import { getEmptyModalAction } from "@/shared/ui/Modal/lib/action.modal.lib";
import { IModalAction } from "@/shared/ui/Modal/model/action.modal.model";

type IInitialState = {
    isOpen: boolean
    currentStep: number
    // dataModal: IModalStepperBody[]
    dataModal: any
}

const initialState: IInitialState = {
    isOpen: false,
    currentStep: 0,
    dataModal: []
}

export const ModalStepperSlice = createSlice({
    name: 'modalStepper',
    initialState,
    reducers: {
        setModalNotification(state, action: PayloadAction<IModalAction>){
            state.dataModal = action.payload
        },
        deleteModalNotification(state){
            state.dataModal = getEmptyModalAction()
        },

        showModalNotification(state){
            state.dataModal.isOpen = true
        },
        closeModalNotification(state){
            state.dataModal.isOpen = false
        },
        toggleModalNotification(state){
            state.dataModal.isOpen = !state.dataModal.isOpen
        },
    }
})

export const ModalStepperReducer = ModalStepperSlice.reducer