import { ReactNode, Ref } from "react";

export enum TxtType {
    Div = 'div',
    P = 'p',
    Span = 'span',
    H1 = 'h1',
    H2 = 'h2',
    H3 = 'h3',
    H4 = 'h4',
    H5 = 'h5',
    H6 = 'h6',
}


export interface ITxt {
    className?: string,
    type?: TxtType,

    text: string | ReactNode,
    textDisabled?: string,
    innerRef?: Ref<HTMLElement>
    disabled?: boolean,
    id?: string
}