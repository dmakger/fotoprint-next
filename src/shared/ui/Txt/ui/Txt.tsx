
import { cls } from '@/shared/lib/classes.lib';
import cl from './_Txt.module.scss'
import { ITxt, TxtType } from '../model/txt.model';
import { getTxtTag } from '../lib/tag.txt.lib';


export const Txt = ({
    type = TxtType.Span,
    text,
    textDisabled,
    disabled,
    className,
    id,
    innerRef
}: ITxt ) => {
    const Tag = getTxtTag(type);

    return (
        <Tag
            id={id}
            ref={innerRef}
            className={cls(
                cl[type],
                disabled ? cl.disabled : '', 
                className
            )}
        >
            {(disabled && textDisabled) ? textDisabled : text}
        </Tag>
    );
};
