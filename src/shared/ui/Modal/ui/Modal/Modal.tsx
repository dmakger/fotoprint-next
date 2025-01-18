'use client'

import { FC, ReactNode, useEffect, useState } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_Modal.module.scss'
import { Button, ButtonVariant } from "../../../Button";
import { IModal } from "../../model/modal.model";
import { EModalView } from "../../data/modal.data";

interface ModalProps extends IModal{
    children: ReactNode
    className?: string,
    classNameSidebar?: string
}

export const Modal:FC<ModalProps> = ({
    isOpen: isOwnOpen=false, 
    onClickOverlay=()=>{}, 
    view=EModalView.Center, 
    hasBlack=true, 
    hasClose=false, propsButtonClose, 
    buttonNode, children, 
    className, classNameSidebar
}) => {    
    // STATE
    const [isOpen, setIsOpen] = useState(false);

    // EFFECT
    useEffect(() => {
        if (isOpen === isOwnOpen) return
        setIsOpen(isOwnOpen)
    }, [isOwnOpen])

    useEffect(() => {
        document.body.style.overflow = isOwnOpen ? 'hidden' : 'visible'
    }, [isOwnOpen])

    // HANDLE
    const handleOnClickOverlay = () => {
        onClickOverlay()
    }

    return (
        <>
            {buttonNode}
            <div className={cls(isOpen ? cl.open : '', cl.modal, className)} autoFocus>
                <div onClick={handleOnClickOverlay} 
                     className={cls(
                        isOpen ? cl.openOverlay : '', 
                        hasBlack ? cl.black : '', 
                        cl.overlay, 
                        className
                    )} 
                />
                <div className={cls(
                        isOpen ? cl.openSidebar : '', 
                        cl[view], 
                        cl.sidebar, 
                        classNameSidebar
                    )}
                >
                    {hasClose && 
                        <Button {...propsButtonClose} 
                                variant={propsButtonClose?.variant ?? ButtonVariant.Default}
                                onClick={propsButtonClose?.onClick ?? onClickOverlay} 
                                // afterImage={propsButtonClose?.afterImage ?? XMARK_WHITE__ICON}
                                className={cls(cl.close, propsButtonClose?.className)} />
                    }
                    {children}
                </div>
            </div>
        </>
    )
}
