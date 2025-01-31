import { ReactNode } from 'react'
import cl from './_Wrapper1280.module.scss'
import { cls } from '@/shared/lib/classes.lib'
import { TagAll, TagAllType } from '@/shared/data/tag.data'

interface Wrapper1280Props {
    tag?: TagAllType
    children?: ReactNode
    className?: string
    classNameContent?: string
}

export default function Wrapper1280({
    tag=TagAll.Div, 
    children, 
    className, classNameContent
}: Wrapper1280Props) {

    const Tag = tag as React.ElementType

    return (
        <Tag className={cls(cl.wrapper, className)}>
            <div className={cls(cl.content, classNameContent)}>
                {children}
            </div>
        </Tag>
    )
}
