'use client'

import { cls } from '@/shared/lib/classes.lib'
import cl from './_InputText.module.scss'
import { ChangeEvent, useEffect, useRef } from 'react'
import { WrapperTitleInput } from '@/shared/ui/Wrapper/Title/Input/WrapperTitleInput'
import { EInputTextVariant } from '../data/text.input.data'

interface InputTextProps {
    title?: string
    variant?: EInputTextVariant
    name?: string
    placeholder?: string
    className?: string,
    onChange?: Function,
    defaultValue?: string,
    type?: string
}

export function InputText({
    title,
    variant=EInputTextVariant.DEFAULT,
    className,
    type = 'text',
    onChange = () => {},
    defaultValue = '',
    ...rest
 }: InputTextProps) {

    // REF
    const inputRef = useRef<HTMLInputElement>(null)

    // EFFECT
    useEffect(() => {
        if (inputRef.current && defaultValue) {
            inputRef.current.value = defaultValue   
        }
    }, [defaultValue])

    return (
        <WrapperTitleInput title={title}>
            <input className={cls(cl.input, cl[variant], className)}
                   ref={inputRef}
                   type={type}
                   defaultValue={defaultValue}
                   onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
                   {...rest} />
        </WrapperTitleInput>
    )
}
