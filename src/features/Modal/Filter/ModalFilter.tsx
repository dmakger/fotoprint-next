"use client"

import { FC, useState } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_ModalFilter.module.scss';

import { EModalView } from "@/shared/ui/Modal/data/modal.data";
import { Button, ButtonVariant } from "@/shared/ui/Button";
import { IButton } from "@/shared/ui/Button/model/button.model";
import { Modal } from "@/shared/ui/Modal/ui/Modal/Modal";
import { Txt } from "@/shared/ui/Txt/ui/Txt";
import { TxtType } from "@/shared/ui/Txt/model/txt.model";
import { ButtonColor } from "@/shared/ui/Button/data/button.data";
import { ParentCategoryAccording } from "@/widgets/Accordion/Category/Parent/ParentCategoryAccording";

interface ModalFilterProps{
    className?: string,
}

export const ModalFilter:FC<ModalFilterProps> = ({
    className
}) => {
    // STATE
    const [isOpen, setIsOpen] = useState(false)

    // HANDLE
    const toggleClick: IButton['onClick'] = () => {
        setIsOpen(prev => !prev)
    }

    return (
        <div className={cls(className)}>
            <Button title={"Фильтры"} 
                    onClick={toggleClick}
                    variant={ButtonVariant.Text}
                    color={ButtonColor.Tertiary} />
            <Modal isOpen={isOpen}
                    view={EModalView.Left} 
                    classNameSidebar={cl.modalSidebar}
                    onClickOverlay={toggleClick}
            >
                <div className={cl.body}>
                    <Txt text={"Фильтры"} type={TxtType.H2} />

                    <div className={cl.content}>
                        {/* <Accordion title={"Категории"} items={[]} /> */}
                        <ParentCategoryAccording />
                    </div>
                </div>
            </Modal>
        </div>
    )
}
