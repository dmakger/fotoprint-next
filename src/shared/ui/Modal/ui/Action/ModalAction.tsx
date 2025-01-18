"use client"

import { FC } from "react"
import Image from "next/image";

import { cls } from '@/shared/lib/classes.lib';
import cl from './_ModalAction.module.scss'

import { Modal } from "../Modal/Modal";
import { Button } from "@/shared/ui/Button";
import { IModalAction } from "../../model/action.modal.model";
import { TxtType } from "@/shared/ui/Txt/model/txt.model";
import { Txt } from "@/shared/ui/Txt/ui/Txt";
 

interface IModalActionProps extends IModalAction {}

export const ModalAction:FC<IModalActionProps> = ({
    title, 
    text, 
    buttonFirst, buttonSecond, 
    hasBackground=false,
    imageBackgroundSrc = "",
    classNameShowBackgroundImage,
    isLoading,
    className,
    classNameSidebar,
    classNameModalAction,
    ...modalProps
}) => {

    return (
        <Modal {...modalProps}
            className={cls(className)} 
            classNameSidebar={cls(cl.modalSidebar, classNameSidebar)}
        >
            <div className={cls(
                cl.wrapper, 
                hasBackground 
                    ? cls(
                        cl.showBackgroundImage, 
                        classNameShowBackgroundImage, 
                        text  ? cl.hasContent : ''
                        ) 
                    : '',
                classNameModalAction
            )}>
                {(hasBackground && imageBackgroundSrc) && (
                    <Image src={imageBackgroundSrc} alt={"qwe"} className={cl.backgroundImage} />
                )}
                <div className={cl.body}>
                    <Txt type={TxtType.H2} className={cl.title} text={title}/>
                    {/* ====={ TEXT }===== */}
                    {text && (
                        <div className={cl.text}>
                            {text.map((textItem, index) => (
                                <Txt type={TxtType.P} className={cl.textItem} key={index} text={textItem}/>
                            ))}
                        </div>
                    )}

                    {/* ====={ LOADING }===== */}
                    {/* {isLoading && (
                        <Loader />
                    )} */}
                    {/* ====={ BUTTONS }===== */}
                    {(buttonFirst || buttonSecond) && (
                        <div className={cl.buttons}>
                            {buttonSecond && (
                                <Button {...buttonSecond} />
                            )}
                            {buttonFirst && (
                                <Button {...buttonFirst} />
                            )}
                        </div>
                    )}
                </div>
            </div>    
        </Modal>
    )
}
