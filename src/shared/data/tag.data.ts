// BASE
export const TagBase = {
    Div: 'div',
} as const;

// TEXT
export const TagTxt = {
    ...TagBase,

    P: 'p',
    Span: 'span',
    H1: 'h1',
    H2: 'h2',
    H3: 'h3',
    H4: 'h4',
    H5: 'h5',
    H6: 'h6',
} as const;

export type TagTxtType = typeof TagTxt[keyof typeof TagTxt];


// BLOCKS
export const TagBlock = {
    Header: 'header',
    Footer: 'footer',
    Main: 'main',
} as const;


// ALL
export const TagAll = {
    ...TagBase,
    ...TagTxt,
    ...TagBlock,
} as const;

export type TagAllType = typeof TagAll[keyof typeof TagAll];
